"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import AuthInput from "./auth-input";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { getErrorMessage } from "@/app/common/utils/errors";

const RegisterSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type RegisterFormData = z.infer<typeof RegisterSchema>;

const RegisterForm = () => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function onSubmit(data: RegisterFormData) {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5500/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Définir le type de contenu
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(getErrorMessage(result));
        // setError(result.message);
        alert(`Erreur: ${getErrorMessage(result)}`);
        // alert(`Erreur: ${result.message}`);
        return;
      }

      setSuccess("L'utilisateur a été créer avec succèss");
      alert("L'utilisateur a été créer avec succèss");
      router.push("/");
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:ERROR", error);
      setError("Une erreur est survenue lors de la soumission.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-5xl">Get Started</CardTitle>
        <CardDescription>Create your account now</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <AuthInput
              form={form}
              name="email"
              label="Email"
              placeholder="Email"
              disabled={isLoading}
            />

            <AuthInput
              form={form}
              name="password"
              label="Password"
              placeholder="password"
              disabled={isLoading}
            />

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Create your account"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import AuthInput from "./auth-input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/app/common/utils/errors";
import DynamicFormField from "../forms/dynamic-form-field";

const AuthSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type AuthFormData = z.infer<typeof AuthSchema>;

const AuthForm = ({
  type = "login",
  description = "Create your account now",
  title = "Get Started",
  successMessage = "L'utilisateur a été créer avec succèss.",
  errorMessage = "Une erreur est survenue lors de la soumission.",
  buttonLabel = "Créer mon compte",
}) => {
  const form = useForm<AuthFormData>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function onSubmit(data: AuthFormData) {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}/${type}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Définir le type de contenu
          },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );

      const result = await res.json();

      if (!res.ok) {
        setError(getErrorMessage(result));
        // setError(result.message);
        alert(`Erreur: ${getErrorMessage(result)}`);
        // alert(`Erreur: ${result.message}`);
        return;
      }

      setSuccess(successMessage);
      alert("L'utilisateur a été créer avec succèss");
      router.push("/");
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:ERROR", error);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-5xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DynamicFormField
              inputType="input"
              form={form}
              name="email"
              label="Email"
              placeholder="Email"
              type="text"
              disabled={isLoading}
            />
            <DynamicFormField
              inputType="input"
              form={form}
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
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
                buttonLabel
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
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

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/utils/errors";
import AuthInput from "@/components/auth/auth-input";
import { Textarea } from "@/components/ui/textarea";

const ProductSchema = z.object({
  name: z.string().min(2, "Product name must be at least 2 characters long"),
  description: z
    .string()
    .min(8, "Description must be at least 8 characters long"),
  price: z.coerce.number().min(1, "Price must be at least 1€"),
});

type ProductFormData = z.infer<typeof ProductSchema>;

const ProductModal = ({
  description,
  title,
  successMessage,
  errorMessage,
  buttonLabel,
}: any) => {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
    },
  });
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function onSubmit(data: ProductFormData) {
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Définir le type de contenu
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const result = await res.json();

      if (!res.ok) {
        setError(getErrorMessage(result));
        alert(`Erreur: ${getErrorMessage(result)}`);
        return;
      }

      setSuccess(successMessage);
      alert("Le Produit a été créer avec succèss");
      //   router.push("/");
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
            <AuthInput
              form={form}
              name="name"
              label="Nom"
              placeholder="Nom du produit"
              type="text"
              disabled={isLoading}
            />

            {/* <AuthInput
              form={form}
              name="description"
              label="description"
              placeholder="Description du produit"
              type="text-area"
              disabled={isLoading}
            /> */}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description du produit"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    You can <span>@mention</span> other users and organizations.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <AuthInput
              form={form}
              name="price"
              label="price"
              placeholder="Prix du produit"
              type="number"
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

export default ProductModal;

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
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/app/common/utils/errors";
import axios from "axios";
import { handleError, resetMessages } from "@/app/common/utils/notifications";
import { ProductSchema } from "@/schemas";
import DynamicFormField from "../forms/dynamic-form-field";

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
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [picture, setPicture] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  async function onSubmit(data: ProductFormData) {
    try {
      resetMessages(setError, setSuccess);

      if (!picture) {
        return handleError(setError, "Please provide a picture");
      }

      const uploadedImage = await uploadImage();
      console.log("🚀 ~ onSubmit ~ uploadedImage:", uploadedImage);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, image: uploadedImage.secure_url }),
          credentials: "include",
        }
      );

      await handleResponse(response);
    } catch (error) {
      console.error("🚀 ~ onSubmit ~ error:", error);
      handleError(setError, "An error occurred while submitting the form.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleFileChange = (files: FileList | null) => {
    form.setValue("file", files);
    if (files && files[0]) {
      const file = files[0];
      setPicture(file); // Generate a URL for the selected image
      setPreviewUrl(URL.createObjectURL(file)); // Generate a URL for the selected image
    } else {
      setPreviewUrl(null);
    }
  };

  const uploadImage = async () => {
    let formData = new FormData();
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUD_SECRET as string
    );
    formData.append("file", picture as File);
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );
    console.log("🚀 ~ uploadImage ~ data:", data);
    return data;
  };

  async function handleResponse(response: any) {
    const result = await response.json();
    console.log("🚀 ~ handleResponse ~ result:", result);

    if (!response.ok) {
      return handleError(setError, getErrorMessage(result));
    }

    setSuccess(successMessage);
    form.reset();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setPreviewUrl(null);
    alert("Le Produit a été créé avec succès");
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
              name="name"
              label="Nom"
              placeholder="Nom du produit"
              type="text"
              disabled={isLoading}
            />

            <DynamicFormField
              inputType="textarea"
              form={form}
              name="description"
              label="Description"
              placeholder="Prix du produit"
              disabled={isLoading}
              lines={5}
            />

            <DynamicFormField
              inputType="input"
              form={form}
              name="price"
              label="price"
              placeholder="Prix du produit"
              type="number"
              disabled={isLoading}
            />

            {/* <DynamicFormField
              inputType="select"
              form={form}
              name="selectOption"
              label="Select a country"
              placeholder="Prix du produit"
              disabled={isLoading}
              options={[
                { value: "us", label: "United States", id: "us" },
                { value: "ca", label: "Canada", id: "ca" },
                { value: "uk", label: "United Kingdom", id: "uk" },
              ]}
            /> */}
            <DynamicFormField
              inputType="file"
              form={form}
              handleFileChange={handleFileChange}
              fileInputRef={fileInputRef}
              previewUrl={previewUrl}
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

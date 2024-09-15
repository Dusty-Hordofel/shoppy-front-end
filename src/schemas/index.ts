import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(2, "Product name must be at least 2 characters long"),
  description: z
    .string()
    .min(8, "Description must be at least 8 characters long"),
  price: z.coerce.number().min(1, "Price must be at least 1€"),
  file: z
    .any()
    .refine((files) => files?.[0], { message: "File is required" }) // Check if a file is uploaded
    .refine((files) => files?.[0]?.size < 5 * 1024 * 1024, {
      message: "File size must be less than 5MB",
    }) // File size validation
    .refine((files) => ["image/jpeg", "image/png"].includes(files?.[0]?.type), {
      message: "Only JPEG and PNG files are allowed",
    }), // File type validation

  // selectOption: z.string().min(1, { message: "Please select an option" }),
});

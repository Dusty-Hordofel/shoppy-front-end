// "use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductDetails from "./product-details";
import { getProduct } from "@/actions/products/get-products";
import { Skeleton } from "@/components/ui/skeleton";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  inStock: number;
}

export default async function ProductPage({
  params: { productId },
}: {
  params: { productId: string };
}) {
  console.log("🚀 ~ ProductPage ~ params:", productId);

  const product = await getProduct(productId);
  console.log("🚀 ~ product:PRODUCT", product);

  return (
    <Suspense
      fallback={<div className="h-[500px] w-[500px] bg-green-300"></div>}
    >
      <ProductDetails product={product} />
    </Suspense>
  );
}

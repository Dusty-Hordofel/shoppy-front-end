// "use client";

import { useState } from "react";
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
  //   const [quantity, setQuantity] = useState(1);
  //   const [addedToCart, setAddedToCart] = useState(false);

  //   const product: Product = {
  //     id: 1,
  //     name: "Sneakers Élégantes",
  //     price: 129.99,
  //     description:
  //       "Ces sneakers élégantes combinent style et confort. Parfaites pour une utilisation quotidienne ou pour des occasions spéciales, elles sont fabriquées avec des matériaux de haute qualité pour assurer durabilité et confort tout au long de la journée.",
  //     image: "/placeholder.svg?height=400&width=400",
  //     inStock: 10,
  //   };

  //   const handleQuantityChange = (change: number) => {
  //     setQuantity((prev) =>
  //       Math.max(1, Math.min(prev + change, product.inStock))
  //     );
  //   };

  //   const handleAddToCart = () => {
  //     console.log(`Ajouté au panier: ${quantity} x ${product.name}`);
  //     setAddedToCart(true);
  //     setTimeout(() => setAddedToCart(false), 2000);
  //   };

  return <ProductDetails product={product} />;
}

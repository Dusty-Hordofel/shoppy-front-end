"use client";

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
import { Product } from "@/app/common/interfaces/product.interface";
import { useCart } from "@/context/cart/cart-context";
import { CartItem } from "@/context/cart/cart-reducer";

export default function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const {
    state: { cartItems: products },
    totalQuantity,
    dispatch,
  } = useCart();

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => prev + change);
  };

  const handleAddToCart = (item: CartItem) => {
    console.log(`Ajouté au panier: ${quantity} x ${product.name}`);
    setAddedToCart(true);
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
            {/* <Badge variant="secondary" className="mt-2">
              En stock: {product.inStock}
            </Badge> */}
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary mb-4">
              {product.price.toFixed(2)} €
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex items-center space-x-4 mb-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-semibold">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() =>
                handleAddToCart({ ...product, quantity: quantity })
              }
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au panier
            </Button>
          </CardFooter>
          {addedToCart && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
              Produit ajouté au panier avec succès !
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

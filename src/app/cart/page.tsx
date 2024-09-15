"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCart } from "@/context/cart/cart-context";

export default function CartPage() {
  const {
    state: { cartItems: products },
    totalQuantity,
    dispatch,
  } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_ITEM", payload: { id, quantity } });
  };

  const removeProduct = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const tax = subtotal * 0.2; // Supposons une TVA de 20%
  const total = subtotal + tax;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Votre Panier</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Produit</TableHead>
              <TableHead>Prix</TableHead>
              <TableHead>Quantité</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price.toFixed(2)} €</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      //   onClick={() => updateQuantity(product.id, -1)}
                      onClick={() => updateQuantity(product.id, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{product.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(product.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  {(product.price * product.quantity).toFixed(2)} €
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeProduct(product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex flex-col items-end">
        <div className="text-right">
          <p>Sous-total : {subtotal.toFixed(2)} €</p>
          <p>TVA (20%) : {tax.toFixed(2)} €</p>
          <p className="font-bold">Total : {total.toFixed(2)} €</p>
        </div>
      </CardFooter>
    </Card>
  );
}

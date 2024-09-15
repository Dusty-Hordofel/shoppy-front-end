"use client";
import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react"; // Assurez-vous d'importer l'icône ShoppingCart
import { useCart } from "@/context/cart/cart-context";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Link from "next/link";

const CartIcon = () => {
  // Récupérer le contexte du panier pour accéder à `cartItems`
  const {
    state: { cartItems },
    totalQuantity,
  } = useCart();

  return (
    // fixed bottom-4 right-4
    <Link
      className="relative bg-primary text-primary-foreground p-3 rounded-full"
      href="/cart"
    >
      <PiShoppingCartSimpleLight />
      <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold ">
        {totalQuantity()}
        {/* {cartItems.length} */}
      </span>
    </Link>
  );
};

export default CartIcon;

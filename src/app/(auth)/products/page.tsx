// "use client";
// import React, { useState } from "react";
import getProducts from "../../../actions/products/get-products";
import { Product } from "@/app/common/interfaces/product.interface";
import ProductModal from "@/components/products/product-modal";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/context/cart/cart-context";
import { CartItem } from "@/context/cart/cart-reducer";
import ProductList from "./product-list";

const ProductsPage = async () => {
  const products = await getProducts();
  console.log("🚀 ~ ProductsPage ~ products:", products);
  // const { state, dispatch } = useCart();

  // const

  return (
    <main className=" bg-cyan-400">
      {/* <div className=""> */}
      {/* <div className="h-[500px] w-full bg-purple-300"></div> */}

      <ProductList products={products} />
      {/* </div> */}
      {/* <ProductModal
        errorMessage="Erreur de la création du produit"
        successMessage="Produit crée avec succès"
        title="Créer un produit"
        description="Ajout d'un nouveau produit dans votre store"
        buttonLabel="Ajouter votre produit"
      /> */}
    </main>
  );
};

export default ProductsPage;

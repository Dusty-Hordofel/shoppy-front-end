"use client";

import React, { useState } from "react";
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
import { PlusIcon, XIcon } from "lucide-react";
import { useModal } from "@/context/modal/modal-context";
import ResultModal from "@/components/modals/result-modal";
import Link from "next/link";

function ProductList({ products }: { products: Product[] }) {
  const { state, dispatch } = useCart();
  const { showModal, closeModal, isOpen } = useModal();

  const addItemToCart = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <div className="container py-10  bg-yellow-400">
      <div className="flex items-center bg-orange-400 pt-4 pb-20 relative">
        <div
          className={` bg-red-400 w-1/4 h-12 flex items-center justify-start relative`}
        >
          <Button
            onClick={() => {
              isOpen
                ? closeModal()
                : showModal(
                    <ResultModal>
                      <ProductModal
                        errorMessage="Erreur de la création du produit"
                        successMessage="Produit crée avec succès"
                        title="Créer un produit"
                        description="Ajout d'un nouveau produit dans votre store"
                        buttonLabel="Ajouter votre produit"
                      />
                    </ResultModal>
                  );
            }}
            className={`rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 
            ${isOpen ? "fixed z-[1000]" : ""}`}
            aria-label="Ajouter un formulaire"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <PlusIcon className="w-6 h-6" />
            )}
          </Button>
        </div>
        <div className=" bg-green-200 h-12 w-3/4 flex justify-center items-center">
          <h1 className="text-3xl font-bold">Notre Collection</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </Link>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="mb-2">{product.name}</CardTitle>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description}
                </p>
                <p className="font-bold">{product.price.toFixed(2)} €</p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => addItemToCart({ ...product, quantity: 1 })}
                >
                  Ajouter au panier
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>Vous n'êtes pas autorisé à voir ces produits.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;

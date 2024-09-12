import AuthForm from "@/components/auth/auth-form";
import React from "react";
import ProductModal from "./create-product-modal";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex justify-center items-center h-screen">
      <ProductModal
        errorMessage="Erreur de la création du produit"
        successMessage="Produit crée avec succès"
        title="Créer un produit"
        description="Ajout d'un nouveau produit dans votres store"
        buttonLabel="Ajouter votre produit"
      />
    </main>
  );
};

export default page;

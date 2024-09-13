import { cookies } from "next/headers";
import AuthForm from "@/components/auth/auth-form";
import React from "react";
import ProductModal from "./create-product-modal";
import getProducts from "./actions/get-products";
import { Product } from "./interfaces/product.interface";

type Props = {};

export const getHeaders = () => ({
  Cookie: cookies().toString(),
});

const page = async (props: Props) => {
  //   const products = await fetch("http://localhost:5500/api/v1/products", {
  //     method: "GET",
  //     headers: { ...getHeaders() },
  //     // credentials: "include", // Assure que les cookies sont envoyés avec la requête au niveau du frontend
  //   }).then((response) => response.json());

  //   const products = (await getProducts()) as Product[];
  //   console.log("🚀 ~ page ~ products:", products);

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="">
        {/* {products.map(({ name, description, id, price }) => (
          <div key={id}>
            <h2>{name}</h2>
            <p>{description.slice(0, 10) + "..."}</p>
            <span>${price}</span>
          </div>
        ))} */}
      </div>
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

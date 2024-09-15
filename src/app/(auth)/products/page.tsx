import React from "react";
import getProducts from "../../../actions/products/get-products";
import { Product } from "@/app/common/interfaces/product.interface";
import ProductModal from "@/components/products/create-product-modal";

const page = async () => {
  const products = await getProducts();

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="">
        <ProductList products={products} />
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

function ProductList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.length > 0 ? (
        products.map(({ name, description, id, price }: Product) => (
          <div key={id}>
            <h2>{name}</h2>
            <p>{description.slice(0, 10) + "..."}</p>
            <span>${price}</span>
          </div>
        ))
      ) : (
        <p>Vous n'êtes pas autorisé à voir ces produits.</p>
      )}
    </div>
  );
}

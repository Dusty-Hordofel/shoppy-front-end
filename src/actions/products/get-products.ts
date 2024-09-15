// "use server";
import { cookies } from "next/headers";

export const getHeaders = () => ({
  Cookie: cookies().toString(),
});
export default async function getProducts() {
  const result = await fetch("http://localhost:5500/api/v1/products", {
    method: "GET",
    headers: { ...getHeaders() },
    // credentials: "include", // Assure que les cookies sont envoyés avec la requête au niveau du frontend
  }).then((response) => response.json());

  return result;
}
export async function getProduct(productId: string) {
  const result = await fetch(
    `http://localhost:5500/api/v1/products/${productId}`,
    {
      method: "GET",
      headers: { ...getHeaders() },
      // body: JSON.stringify(productId),
      // credentials: "include", // Assure que les cookies sont envoyés avec la requête au niveau du frontend
    }
  ).then((response) => response.json());

  return result;
}

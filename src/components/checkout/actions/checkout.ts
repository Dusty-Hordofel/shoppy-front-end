"use server";

import { getHeaders } from "@/actions/products/get-products";
import { getErrorMessage } from "@/app/common/utils/errors";

// import { post } from "@/app/common/util/fetch";

export default async function checkout(productId: string) {
  return post("checkout/session", { productId });
}

export const post = async (path: string, data: FormData | object) => {
  //   const body = data instanceof FormData ? Object.fromEntries(data) : data;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getHeaders() },
    body: JSON.stringify(data),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return { error: "", data: parsedRes };
};

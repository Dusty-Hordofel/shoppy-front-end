"use server";
import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "./auth-cookie";

export default function authenticated() {
  console.log("COOKIE", !!cookies().get(AUTHENTICATION_COOKIE)?.value);
  return !!cookies().get(AUTHENTICATION_COOKIE)?.value;
}

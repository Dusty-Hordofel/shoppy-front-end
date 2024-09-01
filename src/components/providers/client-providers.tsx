"use client";
import ReduxProvider from "./redux-provider";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReduxProvider>{children}</ReduxProvider>;
}

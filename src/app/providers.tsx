"use client";

import { ReactElement, ReactNode } from "react";
import { AuthContext } from "../components/auth/auth-context";

interface ProviderProps {
  children: ReactNode;
  authenticated: boolean;
}

export default function Providers({ children, authenticated }: ProviderProps) {
  return (
    <AuthContext.Provider value={authenticated}>
      {children}
    </AuthContext.Provider>
  );
}

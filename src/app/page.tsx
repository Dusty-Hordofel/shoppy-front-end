"use client";

import { navLinksData } from "@/components/navbar/data/userNavLinksData";
import { Navigation } from "@/components/navbar/navigation";

export default function Home() {
  return (
    <>
      <Navigation navLinks={navLinksData} />
      <h1>Welcome to the Tchat</h1>
    </>
  );
}

"use client";

import { navLinksData } from "@/components/navbar/data/userNavLinksData";
import { Navigation } from "@/components/navbar/Navigation";

// import { useRouter } from "next/navigation"; // Use App Router navigation hook
// import { Button } from "@/components/ui/button";
// import { useAppDispatch, useAppSelector } from "@/hooks/redux/use-redux-hooks";
// import { logout } from "@/store/userSlice";
// import { useEffect, useState } from "react";
// import SidebarHeader from "@/components/sidebar/header/sidebar-header";

export default function Home() {
  // const navigate = useRouter(); // `useRouter` from "next/navigation"
  // const dispatch = useAppDispatch();
  // const [isMounted, setIsMounted] = useState(false);

  // const { user } = useAppSelector((state) => ({
  //   ...state.user,
  // }));

  // useEffect(() => {
  //   if (!user?.token) {
  //     navigate.push("/auth/login");
  //   }
  // }, [user, navigate]);

  return (
    <>
      <Navigation navLinks={navLinksData} />
      <h1>Welcome to the Tchat</h1>
      {/* <Button onClick={() => dispatch(logout())}>Se deconnecter</Button> */}
      {/* <SidebarHeader /> */}
    </>
  );
}

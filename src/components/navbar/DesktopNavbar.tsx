"use client";
import NavbarLinks from "./NavbarLinks";
import UserButton from "./UserButton";
import { Button } from "@/components/ui/button";
import Logo from "@/components/navbar/Logo";
import { useContext } from "react";
import { AuthContext } from "../auth/auth-context";
import { useRouter } from "next/navigation";

// function SignInButton() {
//   return <Button onClick={() => signIn()}>Sign in</Button>;
// }

export type NavLink = {
  name: string;
  href: string;
};
export const DesktopNavbar = ({ navLinks }: { navLinks: NavLink[] }) => {
  const router = useRouter();
  const isAuthenticated = useContext(AuthContext);
  console.log("🚀 ~ DesktopNavbar ~ isAuthenticated:CLIENT", isAuthenticated);

  isAuthenticated ? router.push("/") : router.push("/auth/login");

  return (
    <header className="hidden min-[840px]:flex items-center justify-between  ">
      <div className="flex items-center justify-center">
        <Logo />

        <div className=" flex w-auto gap-x-2 items-center justify-center ml-20">
          <NavbarLinks navLinks={navLinks} />
        </div>
      </div>
      <div className="flex items-center">
        {/* {session?.user && <UserButton user={session?.user} />}
        {!session?.user && status !== "loading" && <SignInButton />} */}
      </div>
    </header>
  );
};

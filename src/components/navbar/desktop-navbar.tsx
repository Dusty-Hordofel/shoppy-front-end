"use client";
import NavbarLinks from "./navbar-links";
import UserButton from "./user-button";
import { Button } from "@/components/ui/button";
// import Logo from "@/components/navbar/logo";
import { useContext } from "react";
import { AuthContext } from "../auth/auth-context";
import { useRouter } from "next/navigation";
import Logo from "./logo";
import CartIcon from "../cart/cart-icon";
// import CartIcon from "../cart/Cart-icon";
// import Logo from "./logo";
// import Logo from "./logo";
// import Logo from "./Logo";

// function SignInButton() {
//   return <Button onClick={() => signIn()}>Sign in</Button>;
// }

export type NavLink = {
  name: string;
  href: string;
};
export const DesktopNavbar = ({ navLinks }: { navLinks: NavLink[] }) => {
  const router = useRouter();
  // const isAuthenticated = useContext(AuthContext);
  // console.log("🚀 ~ DesktopNavbar ~ isAuthenticated:CLIENT", isAuthenticated);

  // isAuthenticated ? router.push("/") : router.push("/auth/login");

  return (
    <header className="hidden min-[840px]:flex items-center justify-between">
      <div className="flex items-center justify-center gap-x-10">
        <Logo />
        <div className=" flex w-auto gap-x-2 items-center justify-center">
          <NavbarLinks navLinks={navLinks} />
        </div>
        <CartIcon />
      </div>
    </header>
  );
};

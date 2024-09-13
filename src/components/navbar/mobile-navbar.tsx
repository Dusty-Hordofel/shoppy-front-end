"use client";
import React, { SVGProps, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
// import Logo from "@/components/navbar/logo";
// import UserButton from "./UserButton";
import NavbarLinks from "./navbar-links";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./logo";
// import Logo from "./Logo";

export type NavLink = {
  name: string;
  href: string;
};

// function SignInButton() {
//   return <Button onClick={() => signIn()}>Sign in</Button>;
// }

export const MobileNavbar = ({ navLinks }: { navLinks: NavLink[] }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  // const { data: session, status } = useSession();
  return (
    <div className="min-[840px]:hidden flex justify-between items-center h-full">
      <Logo />
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="text-2xl font-normal">
            Menu
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="px-5 py-10 space-y-4">
            <div className="flex items-center justify-center">
              <Logo />
            </div>
            <div className=" flex flex-col w-auto gap-x-2 items-center justify-center">
              <NavbarLinks navLinks={navLinks} />
            </div>
            {/* <div className="flex items-center justify-center">
              {session?.user && <UserButton user={session?.user} />}
              {!session?.user && status !== "loading" && <SignInButton />}
            </div> */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

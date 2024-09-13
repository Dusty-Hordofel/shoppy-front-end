"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type userNavLink = {
  name: string;
  // icon: JSX.Element;
  href: string;
};

export const NavBarLink = ({
  link,
  clickCallback,
}: {
  link: userNavLink;
  clickCallback?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <li
      className={`${
        isActive ? "text-black " : "text-muted-foreground"
      }  hover:text-black uppercase block cursor-pointer navigation`}
    >
      <Link
        href={link.href}
        scroll={false}
        // onClick={() => {
        //   if (clickCallback) clickCallback();
        // }}
      >
        <span>{link.name}</span>
      </Link>
    </li>
  );
};

// <li >
// <Link
//   href={link.href}
//   scroll={false}
//   onClick={() => {
//     if (clickCallback) clickCallback();
//   }}
// >
{
  /* <span
      className={`${
        isActive ? "text-black " : "text-muted-foreground"
      } w-max hover:text-black uppercase cursor-pointer`}
      > */
}

{
  /* </span> */
}
// </Link>
// </li>

import React from "react";
import { NavBarLink } from "./navbar-link";

export type NavLink = {
  name: string;
  href: string;
};

const NavbarLinks = ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <ul className="flex gap-x-4">
      {navLinks.map((navLink, index) => (
        <NavBarLink key={index} link={navLink} />
      ))}
    </ul>
  );
};

export default NavbarLinks;

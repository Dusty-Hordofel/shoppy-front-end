import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

export type NavLink = {
  name: string;
  href: string;
};

export const Navigation = async ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <div className="p-5 sticky top-0 bg-white z-10">
      <DesktopNavbar navLinks={navLinks} />
      <MobileNavbar navLinks={navLinks} />
    </div>
  );
};

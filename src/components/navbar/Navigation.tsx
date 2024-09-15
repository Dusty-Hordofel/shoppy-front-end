import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

export type NavLink = {
  name: string;
  // icon: JSX.Element;
  href: string;
};

export const Navigation = async ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <div className="h-24 py-5 sticky top-0 bg-white z-10">
      <DesktopNavbar navLinks={navLinks} />
      <MobileNavbar navLinks={navLinks} />
    </div>
  );
};

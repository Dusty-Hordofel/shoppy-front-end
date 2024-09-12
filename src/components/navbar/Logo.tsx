import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div
      // className=" bg-yellow-300"
      aria-label="Cliquez sur le logo pour vous rendre sur la page d'accueil"
      tabIndex={0}
    >
      <Link href="/" className="text-2xl font-extrabold">
        BILOKO
      </Link>
    </div>
  );
};

export default Logo;

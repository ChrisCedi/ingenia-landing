"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const LinkHeader = ({ children, route }) => {
  const pathname = usePathname();

  return (
    <Link
      href={route}
      className={`mx-3 text-lg hover:text-xl cursor-pointer transition-all duration-300 ease-in-out ${
        pathname == route ? `text-orangle` : `text-gray-900`
      } `}
    >
      {children}
    </Link>
  );
};

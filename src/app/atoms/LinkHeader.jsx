"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const LinkHeader = ({ children, route }) => {
  const pathname = usePathname();

  return (
    <div className="mx-3 lg:px-4">
      <Link
        href={route}
        className={`text-xl  hover:text-xxl cursor-pointer transition-all duration-300 ease-in-out   ${
          pathname == route ? `font-semibold text-orange ` : `text-gray-900`
        } `}
      >
        {children}
      </Link>
    </div>
  );
};

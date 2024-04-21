import Link from "next/link";
import { routes } from "@/app/components/molecules/Header/routes";

export const RoutesFooter = () => {
  return (
    <div className="flex flex-col items-end my-2">
      <div className="flex items-center">
        <Link className="text-gray-600 font-semibold" href={routes.about}>
          About us
        </Link>
        <div className="border border-solid border-gray-400 h-4 mx-2" />
        <Link className="text-gray-600 font-semibold" href={routes.work}>
          Our Work
        </Link>
        <div className="border border-solid border-gray-400 h-4 mx-2" />
        <Link className="text-gray-600 font-semibold" href={routes.manifest}>
          Blog
        </Link>
        <div className="border border-solid border-gray-400 h-4 mx-2" />
        <Link className="text-gray-600 font-semibold" href={routes.contact}>
          Contact
        </Link>
      </div>
    </div>
  );
};

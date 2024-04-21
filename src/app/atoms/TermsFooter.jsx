import Link from "next/link";
import { routes } from "@/app/components/molecules/Header/routes";

export const TermsFooter = () => {
  return (
    <div className="flex items-center my-2">
      <Link
        className="text-gray-600 font-semibold text-sm"
        href={routes.manifest}
      >
        Terms Of Use
      </Link>
      <div className="border border-solid border-gray-400 h-4 mx-2" />
      <Link
        className="text-gray-600 font-semibold text-sm"
        href={routes.contact}
      >
        Privacy Policy
      </Link>
    </div>
  );
};

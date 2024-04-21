import { TermsFooter } from "@/app/atoms/TermsFooter";
import { RoutesFooter } from "@/app/atoms/RoutesFooter";
import { AddressFooter } from "@/app/atoms/AddressFooter";
import { ButtonsMedia } from "@/app/atoms/ButtonsMedia";

export const Footer = () => {
  return (
    <div className="min-h-40 bg-grey flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-5/6 md:w-5/6 lg:w-4/6 py-8">
        <AddressFooter />
        <div className="flex flex-col items-end h-auto justify-center lg:justify-between">
          <RoutesFooter />

          <TermsFooter />
          <ButtonsMedia />
        </div>
      </div>
    </div>
  );
};

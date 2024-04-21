import { CountryCard } from "./CountryCard";

export const AddressFooter = () => {
  return (
    <div className="flex flex-col  items-start">
      <p>2024 ingenia Group</p>
      <div className=" flex-col  my-8 flex md:flex-row justify-center">
        <div>
          <CountryCard
            country="USA"
            address="1200 18th Street, NW"
            city="Suite 700"
            state="Washington DC 20036 USA"
            number="5022900"
            icon="/svg/address-usa.svg"
          />
        </div>
        <div className="hidden lg:flex md:border border-solid border-gray-900 mx-7" />
        <div>
          <CountryCard
            country="MEXICO"
            address="Antole France 311"
            city="Polanco, Miguel Hidalgo"
            state="11560 México D.F."
            number="5022900"
            icon="/svg/address-mexico.svg"
          />
        </div>
      </div>
    </div>
  );
};

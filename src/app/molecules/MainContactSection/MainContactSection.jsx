import { AddressCard } from "@/app/atoms/AddressCard";

export const MainContactSection = () => {
  return (
    <div className="flex h-screen">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="bg-[url('/place_mexico_city.jpg')] bg-cover bg-top flex justify-center items-center flex-col">
          <p className="text-white font-bold pb-4 text-4xl md:text-6xl ">
            Mexico City
          </p>
          <AddressCard
            street="ANATOLE FRANCE 311"
            city="Polanco, Miguel Hidalgo"
            state="11560 México D.F."
            phoneNumber="50 22 09 00"
          />
        </div>
        <div className="bg-[url('/place_washington.jpg')] bg-cover bg-left flex justify-center items-center flex-col">
          <p className="text-white font-bold  pb-4 text-4xl md:text-6xl ">
            Whashington D.C.
          </p>
          <AddressCard
            street="1200 18TH STREET, NW"
            city="Suite 700"
            state="Whashington DC 20036 USA."
            phoneNumber="50 22 09 00"
          />
        </div>
      </div>
    </div>
  );
};

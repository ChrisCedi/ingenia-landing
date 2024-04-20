export const AddressCard = ({ street, city, state, phoneNumber }) => {
  return (
    <div className="bg-white px-6 py-4 flex flex-col items-center w-72">
      <p className=" text-lg font-semibold">{street}</p>
      <p className="text-lg">{city}</p>
      <p className="text-lg">{state}</p>
      <p className="pt-3 text-orange text-lg">{phoneNumber}</p>
    </div>
  );
};

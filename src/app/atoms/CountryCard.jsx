import Image from "next/image";

export const CountryCard = ({
  country,
  address,
  city,
  state,
  number,
  icon,
}) => {
  return (
    <div>
      <div className="flex">
        <Image
          src={icon}
          width={25}
          height={25}
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
          alt="icon"
        />
        <p className="font-bold text-gray-600">{country}</p>
      </div>
      <p className="text-gray-600">{address}</p>
      <p className="text-gray-600">{city}</p>
      <p className="text-gray-600">{state}</p>
      <p className="text-gray-600">{number}</p>
    </div>
  );
};

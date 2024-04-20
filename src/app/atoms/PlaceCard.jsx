import Image from "next/image";

export const PlaceCard = ({
  placeName,
  street,
  description1,
  description2,
  direction,
}) => {
  return (
    <div className={`flex flex-col  items-${direction} px-4 py-4 w-full`}>
      <div className={`flex `}>
        {direction == "start" && (
          <Image
            src="/svg/place-restaurant.svg"
            className="mx-3"
            width={25}
            height={25}
            style={{ width: "30px", height: "30px" }}
            alt="icon"
          />
        )}
        <h6 className="text-xl md:text-3xl">{placeName}</h6>
        {direction == "end" && (
          <Image
            src="/svg/place-restaurant.svg"
            className="mx-3"
            width={25}
            height={25}
            style={{ width: "30px", height: "30px" }}
            alt="icon"
          />
        )}
      </div>
      <p className="text-gray-500">{street}</p>
      <p className="text-xl text-gray-600">{description1}</p>
      <p className="text-xl text-gray-600">{description2}</p>
    </div>
  );
};

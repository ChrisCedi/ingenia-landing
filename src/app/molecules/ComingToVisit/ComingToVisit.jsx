import { Select, Option } from "@/components/atoms/MaterialTailwindComponent";
import { PlaceCard } from "@/app/atoms/PlaceCard";

export const ComingToVisit = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex flex-col items-center  xl:flex-row">
        <h4 className="text-lg pr-6 py-8 md:p-6  text-center sm:text-2xl px-6">
          Coming to visit us? Here are some of our favorite places around town
          to
        </h4>
        <div className="w-5/6 md:w-2/6 xl:w-1/6">
          <Select
            label="A quiet place to read a book"
            className="rounded-none"
            variant="outlined"
          >
            <Option>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
          </Select>
        </div>
      </div>
      <div className="w-5/6 flex-col lg:w-3/5 my-8 flex md:flex-row justify-center">
        <div>
          <p className="px-5 text-xs text-start md:text-end tracking-[0.4rem]">
            MEXICO CITY:
          </p>
          <PlaceCard
            placeName="Name of Place"
            street="123 Main St"
            description1="amazing burgers"
            description2="impromptea jazz trios"
            direction="end"
          />
          <PlaceCard
            placeName="Name of Place"
            street="123 Main St"
            description1="amazing burgers"
            description2="impromptea jazz trios"
            direction="end"
          />
        </div>
        <div className="hidden lg:flex md:border border-solid border-gray-300 mx-5" />
        <div>
          <p className="px-5 text-xs tracking-[0.4rem]">WASHINGTON, D.C:</p>
          <PlaceCard
            placeName="Name of Place"
            street="123 Main St"
            description1="amazing burgers"
            description2="impromptea jazz trios"
            direction="start"
          />
          <PlaceCard
            placeName="Name of Place"
            street="123 Main St"
            description1="amazing burgers"
            description2="impromptea jazz trios"
            direction="start"
          />
        </div>
      </div>
    </div>
  );
};

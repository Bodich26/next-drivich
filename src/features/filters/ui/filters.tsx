import { Input } from "@/shared";
import { CircleX } from "lucide-react";
import { RangeSlider } from "./range-slider";
import { CheckboxGroup } from "./checkbox-group";

const engineType = ["Engine", "Electro"];

export const Filters = () => {
  return (
    <div className="w-[290px] bg-color-white rounded-md p-4 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Filter by</h1>
        <div className="flex items-center gap-1 text-primary cursor-pointer">
          <CircleX width={17} height={17} className="stroke-primary" />
          reset All
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className=" font-medium text-lg">Search</span>
        <Input
          className="border border-black/15 h-[32px] bg-transparent"
          placeholder="enter the car name"
          type="search"
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className=" font-medium text-lg">Price</span>
        <RangeSlider min={0} max={900000} step={1000} value={[0, 900000]} />
      </div>
      <CheckboxGroup
        title="Engine type"
        limit={2}
        defaultItems={[
          {
            text: "Engine",
            value: "1",
          },
          {
            text: "Electro",
            value: "2",
          },
        ]}
        items={[
          {
            text: "Engine",
            value: "1",
          },
          {
            text: "Electro",
            value: "2",
          },
        ]}
      />
    </div>
  );
};

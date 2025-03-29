"use client";

import { Input } from "@/shared";
import { CircleX } from "lucide-react";
import { RangeSlider } from "./range-slider";
import { CheckboxGroup } from "./checkbox-group";
import { usePowerChange } from "../model/use-power-change";
import { useEngineChange } from "../model/use-engine-change";
import { useSearchModel } from "../model/use-search-model";

type Props = {
  priceRange?: [number, number];
  setPriceRange?: (values: [number, number]) => void;
  setEngineTypes: (types: string[]) => void;
  setSearchText?: (text: string) => void;
  setPowerRanges: (values: { min: number; max: number }[]) => void;
};

export const Filters = ({
  priceRange,
  setPriceRange,
  setEngineTypes,
  setSearchText,
  setPowerRanges,
}: Props) => {
  const { handlePowerChange } = usePowerChange({ setPowerRanges });
  const { handleEngineTypeChange } = useEngineChange({ setEngineTypes });
  const { handleSearchModel, searchBrand } = useSearchModel({ setSearchText });

  return (
    <div className="w-[290px] bg-color-white rounded-md p-4 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Filter by</h1>
        <div
          className="flex items-center gap-1 text-primary cursor-pointer"
          onClick={() => window.location.reload()}
        >
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
          value={searchBrand}
          onChange={handleSearchModel}
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className=" font-medium text-lg">Price</span>
        <RangeSlider
          min={0}
          max={900000}
          step={1000}
          value={priceRange}
          onValueChange={setPriceRange}
        />
      </div>
      <CheckboxGroup
        title="Engine type"
        limit={2}
        onChange={handleEngineTypeChange}
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
      <CheckboxGroup
        title="Power"
        limit={3}
        onChange={handlePowerChange}
        defaultItems={[
          {
            text: "250-300 hp",
            value: "3",
          },
          {
            text: "300-400 hp",
            value: "4",
          },
          {
            text: "400-500 hp",
            value: "5",
          },
        ]}
        items={[
          {
            text: "250-300 hp",
            value: "3",
          },
          {
            text: "300-400 hp",
            value: "4",
          },
          {
            text: "400-500 hp",
            value: "5",
          },
          {
            text: "500-600 hp",
            value: "6",
          },
          {
            text: "600-700 hp",
            value: "7",
          },
          {
            text: "> 700 hp",
            value: "8",
          },
        ]}
      />
    </div>
  );
};

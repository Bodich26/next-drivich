"use client";

import React from "react";
import { useSet } from "react-use";
import { FilterCheckbox, FilterCheckboxProps } from "./filters-checkbox";

type Item = FilterCheckboxProps;

type Props = {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
};
export const CheckboxGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  className,
  onChange,
  defaultValue,
}: Props) => {
  const [showAll, setShowAll] = React.useState(false);
  const [selected, { add, toggle }] = useSet<string>(new Set([]));

  const onCheckedChange = (value: string) => {
    toggle(value);
  };

  React.useEffect(() => {
    if (defaultValue) {
      defaultValue.forEach(add);
    }
  }, [defaultValue?.length]);

  React.useEffect(() => {
    onChange?.(Array.from(selected));
  }, [selected]);

  return (
    <div className={className}>
      <p className="font-medium text-lg mb-3">{title}</p>
      <div className="flex flex-col gap-2 max-h-96 overflow-auto scrollbar">
        {(showAll ? items : defaultItems || items).map((item) => (
          <FilterCheckbox
            onCheckedChange={() => onCheckedChange(item.value)}
            checked={selected.has(item.value)}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Hide" : "+ Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

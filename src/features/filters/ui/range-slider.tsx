"use client";

import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/shared";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  step: number;
  formatLabel?: (value: number) => string;
  value?: [number, number];
  onValueChange?: (values: [number, number]) => void;
};

const RangeSlider = React.forwardRef(
  (
    { className, min, max, step, value, onValueChange, ...props }: SliderProps,
    ref
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = React.useState(initialValue);

    React.useEffect(() => {
      setLocalValues(Array.isArray(value) ? value : [min, max]);
    }, [min, max, value]);

    const handleValueChange = (newValues: number[]) => {
      const [minValue, maxValue] = newValues;
      setLocalValues([minValue, maxValue]);
      if (onValueChange) {
        onValueChange([minValue, maxValue]);
      }
    };

    return (
      <div>
        <SliderPrimitive.Root
          ref={ref as React.RefObject<HTMLDivElement>}
          min={min}
          max={max}
          step={step}
          value={localValues}
          onValueChange={handleValueChange}
          className={cn(
            "relative flex w-full touch-none select-none mb-2 items-center",
            className
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-primary/20">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>
          {localValues.map((_, index) => (
            <SliderPrimitive.Thumb
              key={index}
              className="block h-5 w-5 rounded-full border border-primary/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            />
          ))}
        </SliderPrimitive.Root>
        <div className="flex justify-between mb-2">
          <span>Min: ${localValues[0].toLocaleString("en-US")}</span>
          <span>Max: ${localValues[1].toLocaleString("en-US")}</span>
        </div>
      </div>
    );
  }
);

RangeSlider.displayName = SliderPrimitive.Root.displayName;

export { RangeSlider };

import { PowerType } from "./filters-type";

export const usePowerChange = ({ setPowerRanges }: PowerType) => {
  const handlePowerChange = (values: string[]) => {
    const powerRanges: { min: number; max: number }[] = [];

    if (values.includes("3")) {
      powerRanges.push({ min: 250, max: 300 });
    }
    if (values.includes("4")) {
      powerRanges.push({ min: 300, max: 400 });
    }
    if (values.includes("5")) {
      powerRanges.push({ min: 400, max: 500 });
    }
    if (values.includes("6")) {
      powerRanges.push({ min: 500, max: 600 });
    }
    if (values.includes("7")) {
      powerRanges.push({ min: 600, max: 700 });
    }
    if (values.includes("8")) {
      powerRanges.push({ min: 700, max: 2000 });
    }

    setPowerRanges?.(powerRanges);
  };

  return { handlePowerChange, setPowerRanges };
};

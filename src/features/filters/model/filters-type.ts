type PowerType = {
  setPowerRanges: (values: { min: number; max: number }[]) => void;
};

type SearchType = {
  setSearchText?: (text: string) => void;
};

type EngineType = {
  setEngineTypes: (types: string[]) => void;
};

export type { PowerType, SearchType, EngineType };

import { EngineType } from "./filters-type";

export const useEngineChange = ({ setEngineTypes }: EngineType) => {
  const handleEngineTypeChange = (values: string[]) => {
    const engineTypes: string[] = [];
    if (values.includes("1")) {
      engineTypes.push("Engine");
    }
    if (values.includes("2")) {
      engineTypes.push("Electro");
    }
    setEngineTypes(engineTypes);
  };
  return { handleEngineTypeChange, setEngineTypes };
};

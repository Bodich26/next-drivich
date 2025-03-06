type ProductType = {
  id: string;
  brand: string;
  model: string;
  imageSrc: string;
  power: number;
  speed?: number;
  color?: Array<string>;
  acceleration?: number;
  engineType: "ENGINE" | "ELECTRO";
  engineValue?: number;
  batteryCapacity?: number;
  price: number;
  discount?: number;
};

export type { ProductType };

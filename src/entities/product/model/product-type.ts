export type ProductType = {
  id: string;
  brand: string;
  model: string;
  imageSrc: string;
  power: number;
  speed?: number;
  color?: Array<string>;
  acceleration?: number;
  engineType?: "engine" | "electro" | string;
  engineVolume?: number;
  batteryCapacity?: number;
  price: number;
  discount?: number;
};

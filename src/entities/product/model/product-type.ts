export type ProductType = {
  id: string;
  brand: string;
  model: string;
  imageSrc: string;
  power: number;
  speed?: number;
  color?: string;
  acceleration?: number;
  engineType?: "engine" | "electro";
  engineVolume?: number;
  batteryCapacity?: number;
  price: number;
};

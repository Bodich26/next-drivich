import { axiosInstance } from "@/shared";
import { ProductType } from "../model";

export const fetchProducts = async (): Promise<ProductType[]> => {
  try {
    const { data } = await axiosInstance.get<ProductType[]>("/products");
    return data;
  } catch (error) {
    console.log(
      "Произошла ошибка при получении продуктов через Axios API: ",
      error
    );
    throw error;
  }
};

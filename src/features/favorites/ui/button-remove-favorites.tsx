import { CircleX } from "lucide-react";
import { useRemoveFavorites } from "../model/use-remove-favorites";
import { useHandleToast } from "@/shared";

type ButtonProps = {
  productId: number;
};

export const ButtonRemoveFavorites = ({ productId }: ButtonProps) => {
  const { removeProductFromFavorites } = useRemoveFavorites();
  const { showToast } = useHandleToast();

  const handleRemoveProduct = async () => {
    const { success, error } = await removeProductFromFavorites(productId);
    if (success) {
      showToast("remove", "favorites");
    } else {
      showToast("error", "favorites", error);
    }
  };

  return (
    <CircleX
      onClick={() => handleRemoveProduct()}
      width={19}
      height={19}
      className=" absolute left-[7px] top-[5px] stroke-primary cursor-pointer"
    />
  );
};

import { CircleX } from "lucide-react";
import { useRemoveFavorites } from "../model/use-remove-favorites";
import { useCurrentUser, useToast } from "@/shared";

type ButtonProps = {
  productId: number;
};

export const ButtonRemoveFavorites = ({ productId }: ButtonProps) => {
  const { removeProductFromFavorites } = useRemoveFavorites();
  const currentUser = useCurrentUser();
  const { toast } = useToast();

  const handleRemoveProduct = async () => {
    if (currentUser) {
      const { success, error } = await removeProductFromFavorites(productId);
      if (success) {
        toast({
          title: "Removed from favorites",
          description: "Successfully removed ❤️",
        });
      } else {
        toast({
          title: "Went wrong favorites",
          description:
            String(error) || "Oops, something went wrong. Try again later",
          variant: "destructive",
        });
      }
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

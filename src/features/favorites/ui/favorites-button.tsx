import { Button } from "@/shared";
import { Heart } from "lucide-react";

export const FavoritesButton = () => {
  return (
    <Button className=" font-medium text-base" size="sm">
      <Heart />
      12
    </Button>
  );
};

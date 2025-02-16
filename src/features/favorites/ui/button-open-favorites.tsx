import { Button, SheetTrigger } from "@/shared";
import { Heart } from "lucide-react";

export const ButtonOpenFavorites = () => {
  return (
    <SheetTrigger asChild>
      <Button className=" font-medium text-base" size="sm">
      <Heart />
      12
    </Button>
    </SheetTrigger>
    
  );
};

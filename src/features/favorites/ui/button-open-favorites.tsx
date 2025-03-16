import { Button, SheetTrigger } from "@/shared";
import { Heart } from "lucide-react";
import { useCountFavorites } from "../model/use-count-favorites";
import { ClipLoader } from "react-spinners";

export const ButtonOpenFavorites = () => {
  const { count, isLoading, error } = useCountFavorites();
  return (
    <SheetTrigger asChild>
      <Button className="font-medium text-base" size="sm">
        <Heart />
        {isLoading ? (
          <ClipLoader color="hsb(210 40% 98%)" size="17" />
        ) : error ? (
          ""
        ) : (
          count
        )}
      </Button>
    </SheetTrigger>
  );
};

import { Button } from "@/shared";
import { LucideUser } from "lucide-react";

export const SigninButton = () => {
  return (
    <Button className="font-medium text-base" type="submit" size="sm">
      <LucideUser />
      Login
    </Button>
  );
};

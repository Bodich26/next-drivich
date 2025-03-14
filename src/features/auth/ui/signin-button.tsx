import { Button } from "@/shared";
import { LucideUser } from "lucide-react";
import { signIn } from "next-auth/react";

export const SigninButton = () => {
  return (
    <Button
      className="font-medium text-base"
      type="submit"
      size="sm"
      onClick={() => signIn()}
    >
      <LucideUser />
      Login
    </Button>
  );
};

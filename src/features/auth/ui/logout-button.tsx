import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <button
      className="flex items-center gap-2"
      onClick={() => signOut({ callbackUrl: "/auth" })}
    >
      <LogOut width={18} height={18} />
      Logout
    </button>
  );
};

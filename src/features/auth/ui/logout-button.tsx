import { LogOut } from "lucide-react";

export const LogoutButton = () => {
  return (
    <button className="flex items-center gap-2">
      <LogOut width={18} height={18} />
      Logout
    </button>
  );
};

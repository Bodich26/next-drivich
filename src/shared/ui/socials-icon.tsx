import Link from "next/link";
import { socials } from "../lib";

export const SocialsIcon = () => {
  return (
    <ul className="flex justify-between items-center gap-6">
      {socials.map(({ id, link, icon: Icon }) => {
        return (
          <li key={id} className="group">
            <Link href={link} target="_blank">
              {Icon && (
                <Icon width={24} height={24} className="hover-effect-icon" />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

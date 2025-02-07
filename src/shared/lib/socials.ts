import { Github, Instagram, Twitch, Youtube } from "lucide-react";

export const socials = [
  { id: "1", socialName: "Instagram", link: "/", icon: Instagram },
  { id: "2", socialName: "Twitch", link: "/", icon: Twitch },
  {
    id: "3",
    socialName: "Youtube",
    link: "https://www.youtube.com/",
    icon: Youtube,
  },
  { id: "4", socialName: "Github", link: "/", icon: Github },
];

export type SocialsType = (typeof socials)[number];

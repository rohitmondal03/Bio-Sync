import { type LucideIcon, Github,  Twitter, User} from "lucide-react";


type TPersonalLink= {
  href: string;
  label:string;
  Icon: LucideIcon
}


export const PORTFOLIO_LINK = "https://portfolio-ten-virid-46.vercel.app/";
export const GITHUB_LINK = "https://github.com/rohitmondal03";
export const TWITTER_LINK = "https://twitter.com/RohitMo62534745";


export const PERSONAL_LINKS_LIST: TPersonalLink[]= [
  {
    label: "GitHub",
    href: GITHUB_LINK,
    Icon: Github,
  },
  {
    label: "Twitter",
    href: TWITTER_LINK,
    Icon: Twitter,
  },
  {
    label: "Portfolio",
    href: PORTFOLIO_LINK,
    Icon: User,
  },
]
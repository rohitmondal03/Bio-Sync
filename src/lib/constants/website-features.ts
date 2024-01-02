import { Globe, Settings, User, type LucideIcon } from "lucide-react"


type TFeatures = {
  title: string;
  description: string;
  Icon: LucideIcon;
}


export const WEBSITE_FEATURES: TFeatures[] = [
  {
    title: "User Friendly",
    description: "Easy to use platform, enabling everyone to have their own digital portfolio annd share it with anyone they like...!!",
    Icon: User,
  },
  {
    title: "Open-Source",
    description: "Join the vibrant community! Collaborate, contribute, and unlock endless possibilities together.",
    Icon: Globe,
  },
  {
    title: "Modern day Tech stacks",
    description: "BioSync is built with NextJS, Prisma, TailwindCSS and some other awesome packages, libraries and frameworks.",
    Icon: Settings,
  },
]
import { type Metadata } from "next";

import { GITHUB_LINK } from "@/lib/config/personal-links.config";
import {
  WEBSITE_AUTHOR,
  WEBSITE_DESC,
  WEBSITE_LINK,
  WEBSITE_TITLE
} from "@/lib/config/website-details.config";
import { getServerAuthSession } from "@/server/auth";


// ROOT METADATA
export const RootMetadata: Metadata = {
  title: "BioSync, your single link Portfolio",
  description: "Your single link portfolio...",
  applicationName: WEBSITE_TITLE,
  metadataBase: new URL(WEBSITE_LINK),
  openGraph: {
    type: "website",
    title: WEBSITE_TITLE,
    description: WEBSITE_DESC,
    siteName: WEBSITE_TITLE,
  },
  appleWebApp: {
    capable: true,
    title: WEBSITE_TITLE,
    statusBarStyle: "default",
  },
  authors: {
    name: WEBSITE_AUTHOR,
    url: GITHUB_LINK
  },
  twitter: {
    title: WEBSITE_TITLE,
    site: WEBSITE_LINK,
    creator: WEBSITE_AUTHOR,
    description: WEBSITE_DESC,
    card: "summary_large_image",
  },
  robots: "index, follow",
  generator: "Next.js",
  keywords: [
    "biosync",
    "single link portfolio",
    "online portfolio",
    "linktree",
    "nextjs",
    "nextjs server components",
    "server components",
    "reactjs",
    "react server conponents",
    "tailwind css",
    "vercel",
    "rohitmondal03",
    "Rohit Mondal",
  ]
}


// NEW BIOSYNC PAGE METADATA
export const NewBioSyncPageMetadata: Metadata = {
  title: "Create a new BioSync !",
  description: `Create your own BioSync page by sharing information about yourself, your social links and your projects.`,
}


// PROFILE PAGE METADATA
export async function dynamicMetadataForProfilePage(): Promise<Metadata> {
  const sessionDetails = await getServerAuthSession();

  const userDetails = sessionDetails?.user;
  const userProfilePic = userDetails?.image;
  const userName = userDetails?.name;


  return {
    title: "Profile || " + userName,
    icons: [`${userProfilePic}`]
  }
}
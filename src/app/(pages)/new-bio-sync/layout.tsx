import { type Metadata } from "next"

import { getServerAuthSession } from "@/server/auth"
import type { ILayout } from "types";


export async function generateMetadata(): Promise<Metadata> {
  const sessionDetails = await getServerAuthSession();

  const userDetails = sessionDetails?.user;  //user details
  const userProfilePic = userDetails?.image  // user's pic

  return {
    title: "Create new BioSync",
    icons: [`${userProfilePic}`],
  }
}


export default function DashboardLayout(
  { children }: ILayout
) {
  return (
    <main>
      {children}
    </main>
  )
}
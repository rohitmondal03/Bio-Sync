import { type Metadata } from "next"

import { getServerAuthSession } from "@/server/auth"


export async function generateMetadata(): Promise<Metadata> {
  const sessionDetails = await getServerAuthSession();

  const userDetails = sessionDetails?.user;  //user details
  const userName = userDetails?.name;   //user's name
  const userProfilePic = userDetails?.image  // user's pic

  return {
    title: `${userName}'s Dashboard`,
    icons: [`${userProfilePic}`],
  }
}


export default function DashboardLayout(
  { children }: ILayout
) {
  return (
    <>{children}</>
  )
}
import { type Metadata } from 'next'

import { getServerAuthSession } from '@/server/auth'
import type { ILayout } from 'types'


export async function generateMetadata(): Promise<Metadata> {
  const sessionDetails = await getServerAuthSession();

  const userDetails = sessionDetails?.user;
  const userProfilePic = userDetails?.image;
  const userName = userDetails?.name;


  return {
    title: "Profile || " + userName,
    icons: [`${userProfilePic}`]
  }
}



export default function ProfileLayout(
  { children }: ILayout
) {
  return (
    <main>
      {children}
    </main>
  )
}

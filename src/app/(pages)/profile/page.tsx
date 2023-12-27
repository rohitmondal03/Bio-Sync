import { getServerAuthSession } from "@/server/auth"
import { redirect } from "next/navigation";

import UserProfileWidget from "./_components/UserProfileWidget";
import classNames from "classnames";


export default async function UsersProfilePage() {
  const session = await getServerAuthSession();

  !session && redirect("/api/auth/signin?callbackUrl=%2Fprofile")


  return (
    <section className={classNames({
      "md:py-12 px-5 md:px-10 lg:px-20 my-2": true,
    })}>
      <UserProfileWidget />
    </section>
  )
}

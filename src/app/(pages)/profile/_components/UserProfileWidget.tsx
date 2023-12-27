import Image from "next/image";
import classNames from "classnames";

import { getServerAuthSession } from "@/server/auth"
import { db } from "@/server/db";

import UserBioSyncCard from "./user-bio-sync-card";
import IntroLabel from "./intro-label-mockup";
import { Separator } from "@/components/ui/separator";


export default async function UserProfileWidget() {
  const session = await getServerAuthSession();

  const userDetails = session?.user;
  const userId = String(userDetails?.id);
  const userName = String(userDetails?.name);
  const userImage = String(userDetails?.image)
  const userEmail = String(userDetails?.email)


  // FOR GETTING USER'S OAUTH Provider
  const getAccountProvider = await db.account.findFirst({
    where: {
      userId: userId
    },
    select: {
      provider: true,
    }
  })
  const provider = String(getAccountProvider?.provider);
  const providerFormatted = provider.charAt(0).toUpperCase() + provider.slice(1);



  // FOR GETTING USER'S BIOSYNCS
  const usersBioSyncs = await db.userBio.findMany({
    where: {
      userId: userId,
    }
  })



  return (
    <section className={classNames({
      "space-y-16": true,
    })}>
      <div className={classNames({
        "flex flex-col md:flex-row items-center justify-center": true,
        "md:gap-24 lg:gap-32 xl:gap-40": true,
      })}>
        <Image
          alt="PROFILE PIC OF USER"
          src={userImage}
          blurDataURL={userImage}
          height={350}
          width={350}
          className="scale-[.7] sm:scale-75 md:scale-100 rounded-full md:rounded-3xl"
          priority
        />


        <div className="space-y-3 sm:space-y-4 md:space-y-8">
          <IntroLabel label="Name" detail={userName} />
          <IntroLabel label="Email" detail={userEmail} />
          <IntroLabel label="OAuth Provider" detail={providerFormatted} />
        </div>
      </div>


      <Separator
        orientation="horizontal"
        className="h-2 bg-slate-500 rounded-xl"
      />


      <div className={classNames({
        "space-y-10": true,
      })}>
        <h1 className={classNames({
          "text-center text-3xl sm:text-4xl font-bold text-gray-600": true,
          "underline": true,
        })}>Your BioSyncs</h1>


        <div className="grid md:grid-cols-2 gap-5">
          {usersBioSyncs.map((uBios) => (
            <UserBioSyncCard {...uBios} />
          ))}
        </div>
      </div>
    </section>
  )
}
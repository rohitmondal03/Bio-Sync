import dynamic from "next/dynamic";
import Image from "next/image";
import classNames from "classnames";

import { getServerAuthSession } from "@/server/auth"
import { db } from "@/server/db";

const IntroLabel = dynamic(() => import("./intro-label-mockup"))
const UserBioSyncCard = dynamic(() => import("./user-bio-sync-card"))



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
          className={classNames({
            "rounded-full md:rounded-3xl": true,
            "scale-[.7] sm:scale-75 md:scale-100": true,
            "shadow-[10px_10px_0] shadow-gray-700": true,
          })}
          priority
        />

        <div className="space-y-3 sm:space-y-4 md:space-y-8">
          <IntroLabel label="Name" detail={userName} />
          <IntroLabel label="Email" detail={userEmail.slice(0, 15) + "..."} className="flex flex-col xs:hidden" />
          <IntroLabel label="Email" detail={userEmail} className="hidden xs:flex flex-col" />
          <IntroLabel label="OAuth Provider" detail={providerFormatted} />
        </div>
      </div>


      <div className={classNames({
        "space-y-10": true,
      })}>
        <h1 className={classNames({
          "text-center text-3xl sm:text-4xl font-bold text-gray-600": true,
          "underline": true,
        })}>Your BioSync</h1>


        <div className="flex flex-wrap items-center justify-center gap-7">
          {usersBioSyncs.map((uBios) => (
            <UserBioSyncCard key={uBios.bioId} {...uBios} />
          ))}
        </div>
      </div>
    </section>
  )
}


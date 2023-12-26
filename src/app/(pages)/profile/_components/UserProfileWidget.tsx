import Image from "next/image";
import classNames from "classnames";

import { getServerAuthSession } from "@/server/auth"
import { db } from "@/server/db";
import { Label } from "@/components/ui/label";


export default async function UserProfileWidget() {
  const session = await getServerAuthSession();

  const userDetails = session?.user;
  const userId = String(userDetails?.id);
  const userName = String(userDetails?.name);
  const userImage = String(userDetails?.image)
  const userEmail = String(userDetails?.email)


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



  return (
    <>
      <div className="flex flex-row items-center justify-center gap-40">
        <Image
          alt="PROFILE PIC OF USER"
          src={userImage}
          blurDataURL={userImage}
          height={400}
          width={400}
          className="rounded-2xl"
          priority
        />


        <div className="space-y-8">
          <div>
            <Label className="text-lg text-muted-foreground underline">Your Name</Label>
            <h1 className={classNames({
              "font-bold text-3xl text-gray-600": true,
            })}>
              {userName}
            </h1>
          </div>

          <div>
            <Label className="text-lg text-muted-foreground underline">Email</Label>
            <h1 className={classNames({
              "font-bold text-3xl text-gray-600": true,
            })}>
              {userEmail}
            </h1>
          </div>

          <div>
            <Label className="text-lg text-muted-foreground underline">OAuth Provider</Label>
            <h1 className={classNames({
              "font-bold text-3xl text-gray-600": true,
            })}>
              {providerFormatted}
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

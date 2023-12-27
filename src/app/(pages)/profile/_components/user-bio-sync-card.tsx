import Link from "next/link";
import classNames from "classnames";
import type { UserBio } from "@prisma/client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function UserBioSyncCard(
  { bioId, email, name, bio }: UserBio
) {
  return (
    <Card
      key={bioId}
      className={classNames({
        "border-2 border-gray-600 rounded-xl": true,
        "transition ease-out duration-300": true,
        "bg-zinc-100": true,
        "hover:scale-[1.02] hover:border-black hover:shadow-slate-700 hover:shadow-md": true,
      })}
    >
      <Link href={"/view?bid=" + bioId}>
        <CardHeader className="text-center">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{bio}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-row items-center gap-2">
            <p className="text-muted-foreground font-bold">Email:</p>
            <p>{email}</p>
          </div>
        </CardContent>

        <CardFooter>
          <Button variant={"destructive"} className="font-bold">Delete</Button>
        </CardFooter>
      </Link>
    </Card>
  )
}

"use client"

import Link from "next/link";
import dynamic from "next/dynamic";
import classNames from "classnames";
import { ArrowBigRight } from "lucide-react";
import { FaDeleteLeft } from "react-icons/fa6"
import type { UserBio } from "@prisma/client";

import { deleteBioSync } from "@/actions/delete-bio-sync";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dialog = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.Dialog))
const DialogContent = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogContent))
const DialogTrigger = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTrigger))
const DialogTitle = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTitle))
const DialogHeader = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogHeader))
const DialogClose = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogClose))


export default function UserBioSyncCard(
  { bioId, email, name, bio, id: defaultId }: UserBio
) {
  return (
    <Card
      key={bioId}
      className={classNames({
        "border-2 border-gray-600 rounded-xl": true,
        "transition ease-out duration-300": true,
        "bg-zinc-50 scale-90 xs:scale-100": true,
      })}
    >
      <CardHeader className="text-center p-2 sm:p-6">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{bio.slice(0, 75) + "...."}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-row items-center gap-2">
          <p className="text-muted-foreground font-bold">Email:</p>
          <p>{email}</p>
        </div>
      </CardContent>

      <CardFooter className={classNames({
        "flex flex-row items-center justify-between gap-2 sm:gap-0": true,
        "p-1 sm:p-6": true,
      })}>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"destructive"} className="font-bold">
              Delete <FaDeleteLeft className="icon" />
            </Button>
          </DialogTrigger>

          <DeleteBioSyncDialogContent defaultId={defaultId} />
        </Dialog>


        <Link href={"/view?bid=" + bioId}>
          <Button className="font-bold">
            Link <ArrowBigRight className="icon" />
          </Button>
        </Link>
      </CardFooter>
    </Card >
  )
}



function DeleteBioSyncDialogContent(
  { defaultId }: { defaultId: string }
) {
  return (
    <DialogContent className="border-2 border-zinc-700">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">
          Are you sure you want to delete this
          {" "}<span className="text-red-500">BioSync</span>{" "}
          ?
        </DialogTitle>
      </DialogHeader>


      <DialogClose className="flex flex-row items-center justify-end">
        <Button
          variant={"destructive"}
          onClick={() => deleteBioSync(defaultId)}
        >
          Yes
        </Button>
      </DialogClose>
    </DialogContent>
  )
}
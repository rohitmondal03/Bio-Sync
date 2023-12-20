"use client"

import Link from "next/link";
import dynamic from "next/dynamic";
import { signOut } from "next-auth/react";
import classNames from "classnames";

import { code } from "@/lib/others/fonts"
import { useUser } from "@/hooks/useUser";

const Logo= dynamic(() => import("./Logo"))
const ModeToggle = dynamic(() => import("@/components/themes/theme-toggle").then(mod => mod.ModeToggle))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Dialog = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.Dialog))
const DialogContent = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogContent))
const DialogTitle = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTitle))
const DialogTrigger = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTrigger))
const DialogFooter = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogFooter))
const DialogHeader = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogHeader))
const Avatar = dynamic(() => import("@/components/ui/avatar").then((mod) => mod.Avatar))
const AvatarFallback = dynamic(() => import("@/components/ui/avatar").then((mod) => mod.AvatarFallback))
const AvatarImage = dynamic(() => import("@/components/ui/avatar").then((mod) => mod.AvatarImage))



export default function Navbar() {
  const { authStatus, userDetails } = useUser();

  const userName = userDetails?.name ?? "";   // user's name
  const userProfileSrc = userDetails?.image ?? "";   //user Profile pic 


  return (
    <nav className={classNames({
      "flex flex-row items-center justify-around": true,
      "py-6 border-zinc-500 border-b-2": true,
    })}>
      <>
        <Logo />
      </>

      <div className="flex flex-row items-center justify-center gap-4">
        {authStatus === "authenticated" ? (
          optionalComponents.userAvatar(userName, userProfileSrc)
        ) : (
          <Link href={"/signin"}>
            <Button
              variant={"default"}
              className="font-bold"
            >
              Sign In
            </Button>
          </Link>
        )}

        <Link href={"/dashboard"}>
          <Button
            variant={"default"}
            className="font-bold"
          >
            Dashboard
          </Button>
        </Link>

        {authStatus === "authenticated" && (
          optionalComponents.signOutDialog(userName)
        )}

        <ModeToggle />
      </div >
    </nav >
  )
}



const optionalComponents = {
  userAvatar: (userName: string, userProfileSrc: string) => (
    <Avatar>
      <AvatarFallback>{userName.charAt(0).toLowerCase()}</AvatarFallback>
      <AvatarImage src={userProfileSrc} />
    </Avatar>
  ),

  signOutDialog: (userName: string) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"destructive"}
          className="font-bold"
        >
          Sign Out
        </Button >
      </DialogTrigger >

      <DialogContent className={classNames(`${code.className}`, {
        "border border-black dark:border-white": true,
      })}>
        <DialogHeader>
          <DialogTitle className={classNames({
            "leading-relaxed": true,
          })}>
            Are you sure you want to sign out
            <br /><span className="text-red-500">{userName}</span>
            ?
          </DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button
            variant={"destructive"}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  )
}
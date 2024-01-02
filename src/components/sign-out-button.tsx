"use client"

import dynamic from "next/dynamic"
import { signOut } from "next-auth/react"
import classNames from "classnames"

import { code } from "@/lib/fonts"

const Button= dynamic(() => import("@/components/ui/button").then(mod => mod.Button))
const Dialog = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.Dialog))
const DialogContent = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogContent))
const DialogTitle = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTitle))
const DialogTrigger = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTrigger))
const DialogFooter = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogFooter))
const DialogHeader = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogHeader))


export default function SignOutButton(
  { userName }: { userName: string }
) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"destructive"}
          size={"sm"}
          className="font-bold"
        >
          Sign Out
        </Button>
      </DialogTrigger >

      <DialogContent className={classNames(`${code.className}`, {
        "border border-black": true,
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
"use client"

import Link from "next/link";
import dynamic from "next/dynamic";
import { signOut } from "next-auth/react";
import classNames from "classnames";

import { code } from "@/lib/fonts"
import { useUser } from "@/hooks/useUser";
import { PERSONAL_LINKS_LIST } from "@/lib/constants/personal-links"
import { buttonVariants } from "@/components/ui/button";

const Logo = dynamic(() => import("../Logo"))
const Drawer = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.Drawer))
const DrawerClose = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerClose))
const DrawerContent = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerContent))
const DrawerDescription = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerDescription))
const DrawerHeader = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerHeader))
const DrawerTitle = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerTitle))
const DrawerTrigger = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerTrigger))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Dialog = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.Dialog))
const DialogContent = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogContent))
const DialogTitle = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTitle))
const DialogTrigger = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTrigger))
const DialogFooter = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogFooter))
const DialogHeader = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogHeader))


type TNavButtonProps = {
  variant: "default" | "link" | "secondary" | "outline";
  className?: string;
  label: string;
}


export default function LargeScreenNavbar() {
  const { authStatus, userDetails } = useUser();

  const userName = userDetails?.name ?? "";   // user's name


  return (
    <nav className={classNames({
      "flex flex-row items-center justify-around": true,
      "py-5 border-zinc-600 border-b-4": true,
    })}>
      <>
        <Logo />
      </>

      <div className="flex flex-row items-center justify-center gap-4">
        {authStatus === "authenticated" ? (
          <>
            <Link href={"/profile"}>
              <NavButton label="Profile" variant="secondary" className="font-bold" />
            </Link>

            <Link href={"/new-bio-sync"}>
              <NavButton label="New BioSync" variant="secondary" className="font-bold" />
            </Link>

            <SignOutButton userName={userName} />
          </>
        ) : (
          <Link href={"/signin"}>
            <NavButton label="Sign In" variant="secondary" className="font-bold" />
          </Link>
        )}

        <Drawer>
          <DrawerTrigger asChild>
            <Button variant={"link"} size={"sm"}>@rohit</Button>
          </DrawerTrigger>

          <AuthorProfileDrawer />
        </Drawer>
      </div>
    </nav>
  )
}




function NavButton(
  { variant, className, label }: TNavButtonProps
) {
  return (
    <Button
      variant={variant}
      size={"sm"}
      className={className ? className : ""}
    >
      {label}
    </Button>
  )
}


function SignOutButton(
  { userName }: { userName: string }
) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          size={"sm"}
          className="font-bold text-red-600"
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



function AuthorProfileDrawer() {
  return (
    <DrawerContent className="h-64">
      <DrawerHeader>
        <DrawerTitle className="font-bold text-3xl text-center">
          <span className="text-muted-foreground">Developed by</span>{" "}
          <span className="underline decoration-gray-500">Rohit</span>
        </DrawerTitle>

        <DrawerDescription className="text-center text-black text-lg">
          Check out my Links here
        </DrawerDescription>
      </DrawerHeader>

      <div className="mx-auto space-x-5">
        {PERSONAL_LINKS_LIST.map(({ href, label, Icon }) => (
          <DrawerClose key={href}>
            <Link
              href={href}
              className={buttonVariants({ size: "lg", variant: "default" })}
              target="_blank"
            >
              {label} <Icon className="ml-3" />
            </Link>
          </DrawerClose>
        ))}
      </div>
    </DrawerContent>
  )
}

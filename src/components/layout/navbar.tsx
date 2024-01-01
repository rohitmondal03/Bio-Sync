"use client"

import Link from "next/link";
import dynamic from "next/dynamic";
import { signOut } from "next-auth/react";
import classNames from "classnames";
import { Menu } from "lucide-react";

import { code, montserrat } from "@/lib/fonts"
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
const Sheet= dynamic(() => import("@/components/ui/sheet").then((mod) => mod.Sheet))
const SheetContent= dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetContent))
const SheetDescription= dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetDescription))
const SheetHeader= dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetHeader))
const SheetTitle= dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetTitle))
const SheetClose= dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetClose))
const SheetTrigger= dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetTrigger))


type TNavButtonProps = {
  variant: "secondary" | "destructive";
  className?: string;
  label: string;
}


export default function LargeScreenNavbar() {
  const { authStatus, userDetails } = useUser();

  const userName = userDetails?.name ?? "";   // user's name


  return (
    <nav className={classNames({
      "flex flex-row items-center justify-between md:justify-around": true,
      "py-3 sm:py-5 px-3 sm:px-10 md:px-0": true,
      "border-zinc-500 border-b-2": true,
      "sticky top-0 left-0 z-10": true,
      "bg-opacity-100 backdrop-blur-[100px]": true,
    })}>
      <>
        <Logo />
      </>


      <div className={classNames({
        "hidden md:flex flex-row items-center justify-center gap-4": true,
      })}>
        {authStatus === "authenticated" ? (
          <>
            <Link href={"/profile"}>
              <NavButton label="Profile" variant="destructive" className="font-bold" />
            </Link>

            <Link href={"/new-bio-sync"}>
              <NavButton label="New BioSync" variant="destructive" className="font-bold" />
            </Link>

            <SignOutButton userName={userName} />
          </>
        ) : (
          <>
            <Link href={"/signin"}>
              <NavButton label="Sign In" variant="secondary" className="font-bold" />
            </Link>

            <Link href="/view">
              <NavButton label="Search" variant="secondary" className="font-bold" />
            </Link>
          </>
        )}
      </div>


      <div className={classNames({
        "flex flex-row items-center gap-1 sm:gap-5": true,
      })}>
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant={"link"}
              size={"sm"}
              className={`${montserrat.className} font-bold`}
            >
              @rohit
            </Button>
          </DrawerTrigger>

          <AuthorProfileDrawer />
        </Drawer>


        <div className={classNames({
          "block md:hidden": true,
        })}>
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="scale-100" />
            </SheetTrigger>

            <SmallScreenNavSheetContent
              authenticated={authStatus === "authenticated"}
              userName={userName}
            />
          </Sheet>
        </div>
      </div>
    </nav>
  )
}




// COMMMON NAV BUTTON MOCKUP
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


// SINGOUT BUTTON MOCKUP
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


//  AUTHOR PROFILE DRAWER
function AuthorProfileDrawer() {
  return (
    <DrawerContent className={`${montserrat.className} h-64`}>
      <DrawerHeader>
        <DrawerTitle className="font-bold text-3xl text-center">
          <span className="text-muted-foreground">Developed by</span>{" "}
          <span className="decoration-gray-500">@rohit</span>
        </DrawerTitle>

        <DrawerDescription className="text-center text-black text-lg underline">
          Connect w/ me
        </DrawerDescription>
      </DrawerHeader>

      <div className="mx-auto flex flex-wrap items-center justify-center gap-2">
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


// SMALL SCREEN NAV MENUS
function SmallScreenNavSheetContent(
  { authenticated, userName }: { authenticated: boolean, userName: string }
) {
  return (
    <SheetContent className="w-[15rem] sm:w-[60rem]">
      <SheetHeader>
        <SheetTitle>
          <Logo />
        </SheetTitle>
        <SheetDescription className="underline">
          Your one link platform
        </SheetDescription>
      </SheetHeader>

      <div className={classNames({
        "flex flex-col items-start justify-start gap-5 mt-10": true,
      })}>
        {authenticated ? (
          <>
            <Link href={"/profile"}>
              <SheetClose>
                <NavButton label="Profile" variant="destructive" className="font-bold" />
              </SheetClose>
            </Link>

            <Link href={"/new-bio-sync"}>
              <SheetClose>
                <NavButton label="New BioSync" variant="destructive" className="font-bold" />
              </SheetClose>
            </Link>

            <SignOutButton userName={userName} />
          </>
        ) : (
          <Link href={"/signin"}>
            <SheetClose>
              <NavButton label="Sign In" variant="secondary" className="font-bold" />
            </SheetClose>
          </Link>
        )}
      </div>
    </SheetContent>
  )
}

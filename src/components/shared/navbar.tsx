"use client"

import Link from "next/link";
import dynamic from "next/dynamic";
import classNames from "classnames";
import { Github, Menu } from "lucide-react";

import { montserrat } from "@/lib/fonts"
import { WEBSITE_GITHUB_LINK } from "@/lib/config/website-details.config";
import { useCurrentUser } from "@/hooks/useCurrentUser";


import SignOutButton from "../buttons/sign-out-button";

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Sheet = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.Sheet))
const SheetContent = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetContent))
const SheetDescription = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetDescription))
const SheetHeader = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetHeader))
const SheetTitle = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetTitle))
const SheetClose = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetClose))
const SheetTrigger = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetTrigger))


type TNavButtonProps = {
  variant: "secondary" | "destructive" | "default";
  className?: string;
  label: string;
}


function Navbar() {
  const { authStatus, userDetails } = useCurrentUser();

  const userName = userDetails?.name ?? "";   // user's name


  return (
    <nav className={classNames({
      "flex flex-row items-center justify-between md:justify-around": true,
      "py-3 sm:py-3 px-3 sm:px-10 md:px-0": true,
      "border-zinc-500 border-b-2": true,
      "sticky top-0 left-0 z-10": true,
      "bg-opacity-100 backdrop-blur-[100px]": true,
    })}>
      <>
        <Logo />
      </>


      <div className={classNames({
        "flex flex-row items-center gap-1 xs:gap-6": true,
      })}>
        <Link
          href={WEBSITE_GITHUB_LINK}
          className={classNames({
            "border-2 border-slate-700/60 rounded-full": true,
            "p-2": true,
            "transition ease-out": true,
            "hover:scale- hover:p-[0.35rem] hover:border-4 hover:border-dotted hover:border-zinc-700": true,
          })}
          target="_blank"
        >
          <Github className="fill-slate-300" />
        </Link>


        <div className={classNames({
          "hidden md:flex flex-row items-center justify-center gap-4": true,
        })}>
          {authStatus === "authenticated" ? (
            <>
              <Link href={"/profile"}>
                <NavButton label="Profile" variant="default" className="font-bold" />
              </Link>

              <Link href={"/new"}>
                <NavButton label="New BioSync" variant="default" className="font-bold" />
              </Link>

              <SignOutButton userName={userName} />
            </>
          ) : (
            <>
              <Link href={"/signin"}>
                <NavButton label="Sign In" variant="destructive" className="font-bold" />
              </Link>
            </>
          )}
        </div>


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

export default Navbar



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
          Your one link portfolio...
        </SheetDescription>
      </SheetHeader>

      <div className={classNames({
        "flex flex-col items-start justify-start gap-5 mt-10": true,
      })}>
        {authenticated ? (
          <>
            <Link href={"/profile"}>
              <SheetClose>
                <NavButton label="Profile" variant="default" className="font-bold" />
              </SheetClose>
            </Link>

            <Link href={"/new"}>
              <SheetClose>
                <NavButton label="New BioSync" variant="default" className="font-bold" />
              </SheetClose>
            </Link>

            <SignOutButton userName={userName} />
          </>
        ) : (
          <Link href={"/signin"}>
            <SheetClose>
              <NavButton label="Sign In" variant="destructive" className="font-bold" />
            </SheetClose>
          </Link>
        )}
      </div>
    </SheetContent>
  )
}



// NAVBAR LOGO
function Logo() {
  return (
    <Link href={"/"}>
      <h1 className={classNames(`${montserrat.className}`, {
        "text-2xl sm:text-3xl font-bold text-orange-600": true,
        "border border-zinc-500 rounded-md": true,
        "shadow-[5px_5px_0] shadow-orange-600/60": true,
        "p-2": true,
        "transition ease-out": true,
      })}>
        BioSync
      </h1>
    </Link>
  )
}
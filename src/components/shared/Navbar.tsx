"use client"

import Link from "next/link";
import { signOut } from "next-auth/react";
import classNames from "classnames";

import { ModeToggle } from "@/components/themes/theme-toggle";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import Logo from "./Logo";



export default function Navbar() {
  const { authStatus } = useUser();

  return (
    <nav className={classNames({
      "flex flex-row items-center justify-around": true,
      "py-8 border-zinc-500 border-b-2": true,
    })}>
      <>
        <Logo />
      </>

      <div className="flex flex-row items-center justify-center gap-4">
        <Link href={"/signin"}>
          <Button
            variant={"default"}
            className="font-bold"
          >
            Sign In
          </Button>
        </Link>

        <Link href={"/dashboard"}>
          <Button
            variant={"default"}
            className="font-bold"
          >
            Dashboard
          </Button>
        </Link>

        {authStatus === "authenticated" && (
          <Button
            variant={"destructive"}
            className="font-bold"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </Button>
        )}

        <ModeToggle />
      </div>
    </nav>
  )
}
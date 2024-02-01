"use client"

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { montserrat } from "@/lib/fonts";
import { PERSONAL_LINKS_LIST } from "@/lib/config/personal-links.config";
import { buttonVariants } from "@/components/ui/button";

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Drawer = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.Drawer))
const DrawerClose = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerClose))
const DrawerContent = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerContent))
const DrawerDescription = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerDescription))
const DrawerHeader = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerHeader))
const DrawerTitle = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerTitle))
const DrawerTrigger = dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerTrigger))



export default function Footer() {
  const path= usePathname();


  return (
    <footer className={classNames({
      "flex items-center justify-center": true,
      "text-white text-base": true,
      "bg-black": true,
      "p-1": true,
      "hidden": path === "/new",
    })}>
      <span>Made by:</span>

      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant={"link"}
            size={"sm"}
            className={`${montserrat.className} font-bold text-white underline`}
          >
            @rohit
          </Button>
        </DrawerTrigger>

        <AuthorProfileDrawer />
      </Drawer>
    </footer>
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
              className={buttonVariants({
                size: "lg",
                variant: "default",
              })}
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
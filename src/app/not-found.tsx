"use client"

import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import { montserrat } from "@/lib/fonts";
import { buttonVariants } from "@/components/ui/button";


export default function NotFound() {
  return (
    <section className={classNames(`${montserrat.className}`,{
      "py-16": true,
      "space-y-12": true,
    })}>
      <h1 className="text-center text-red-600 text-3xl xs:text-4xl sm:text-5xl font-bold">
        Page not found !!!
      </h1>

      <Image
        src={"./assets/not_found_img.svg"}
        height={400}
        width={400}
        alt="not found image"
        className={classNames({
          "mx-auto": true,
        })}
      />

      <div className={classNames({
        "sm:space-x-10": true,
        "flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0": true,
      })}>
        <Link
          href={"/"}
          className={buttonVariants({
            variant: "default",
            className: "font-bold",
          })}
        >
          Head to Home Page
        </Link>

        <Link
          href={"/profile"}
          className={buttonVariants({
            variant: "default",
            className: "font-bold",
          })}
        >
          Head to Profile Page
        </Link>
      </div>
    </section>
  )
}

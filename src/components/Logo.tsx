import { montserrat } from "@/lib/fonts"
import classNames from "classnames"
import Link from "next/link"


export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className={classNames(`${montserrat.className}`,{
        "text-2xl sm:text-3xl font-bold text-amber-500": true,
        "transition ease-out": true,
      })}>
        BioSync
      </h1>
    </Link>
  )
}
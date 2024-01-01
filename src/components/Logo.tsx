import Link from "next/link"
import classNames from "classnames"

import { montserrat } from "@/lib/fonts"


export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className={classNames(`${montserrat.className}`,{
        "text-2xl sm:text-3xl font-bold text-slate-600": true,
        "transition ease-out": true,
      })}>
        BioSync
      </h1>
    </Link>
  )
}
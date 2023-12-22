import classNames from "classnames"
import { Montserrat } from "next/font/google"
import Link from "next/link"


const font = Montserrat({
  subsets: ["cyrillic-ext"],
  weight: "800",
})


export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className={classNames(`${font.className}`,{
        "text-3xl hover:text-amber-500 font-bold": true,
        "transition ease-out": true,
      })}>
        BioSync
      </h1>
    </Link>
  )
}
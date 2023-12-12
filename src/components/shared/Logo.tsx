import classNames from "classnames"
import { Montserrat } from "next/font/google"
import Link from "next/link"


const font = Montserrat({
  subsets: ["cyrillic-ext"],
  weight: "800",
})


export default function Logo() {
  return (
    <Link href={"/"} className={classNames(`${font.className}`, {
      "transition ease-out hover:scale-110": true,
    })}>
      <h1 className="text-4xl font-bold">BioSync</h1>
    </Link>
  )
}
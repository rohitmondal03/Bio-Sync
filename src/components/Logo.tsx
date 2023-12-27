import classNames from "classnames"
import Link from "next/link"


export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className={classNames({
        "text-3xl hover:text-amber-500 font-bold": true,
        "transition ease-out": true,
      })}>
        BioSync
      </h1>
    </Link>
  )
}
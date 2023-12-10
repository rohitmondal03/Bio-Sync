import Link from "next/link";
import classNames from "classnames";

import { ModeToggle } from "../themes/theme-toggle";
import { Button } from "../ui/button";
import Logo from "./Logo";


export default function Navbar() {
  return (
    <nav className={classNames({
      "flex flex-row items-center justify-around": true,
      "py-6": true,
    })}>
      <>
        <Logo />
      </>

      <div className="flex flex-row items-center justify-center gap-4">
        <Link href={"/signin"}>
          <Button className="font-bold">Sign In</Button>
        </Link>

        <Link href={"/dashboard"}>
          <Button className="font-bold">Dashboard</Button>
        </Link>

        <ModeToggle />
      </div>
    </nav>
  )
}
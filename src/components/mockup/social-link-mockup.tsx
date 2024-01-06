import Link from "next/link";
import classNames from "classnames";
import { type IconType } from "react-icons";


type TProps = {
  href: string,
  label: string,
  Icon: IconType,
}


export function SocialLinkMockup(
  { href, label, Icon }: TProps
) {
  return (
    <Link
      href={href}
      className={classNames({
        "flex flex-row items-center gap-4": true,
        "text-sm": true,
        "border-2 border-zinc-400 rounded-xl": true,
        "py-1 px-2": true,
        "bg-zinc-200": true,
        "shadow-[3px_3px_0]": true,
        "hover:scale-105 hover:rounded-lg hover:bg-rose-200 hover:border-2 hover:border-black": true,
        "duration-200 transition ease": true,
      })}
      target="_blank"
    >
      <Icon fill="black" />
      {label}
    </Link>
  )
}
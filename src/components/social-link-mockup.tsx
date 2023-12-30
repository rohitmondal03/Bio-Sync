import Link from "next/link";
import classNames from "classnames";
import { type IconType } from "react-icons";


export function SocialLinkMockup(
  { href, label, Icon }: { href: string, label: string, Icon: IconType }
) {
  return (
    <Link
      href={href}
      className={classNames({
        "flex flex-row items-center gap-4": true,
        "text-sm": true,
        "border border-zinc-700 rounded-xl": true,
        "py-1 px-2": true,
        "bg-zinc-300": true,
        "hover:scale-105 hover:rounded-lg duration-200 hover:bg-pink-200 transition ease": true,
      })}
      target="_blank"
    >
      <Icon fill="black" />
      {label}
    </Link>
  )
}
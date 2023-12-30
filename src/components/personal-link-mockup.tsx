import Link from "next/link";
import classNames from "classnames";
import { type IconType } from "react-icons";


export function PersonalLinkMockup(
  { link, label, Icon }: { link: string, label: string, Icon: IconType }
) {
  return (
    <Link
      href={link}
      className={classNames({
        "flex items-center justify-start gap-2": true,
        "text-sm text-gray-900": true,
      })}
      target="_blank"
    >
      <Icon color="black" />
      {label}
    </Link>
  )
}
import Link from "next/link";
import classNames from "classnames";
import { type IconType } from "react-icons";


type TProps = {
  link: string,
  label: string,
  className?: string,
  Icon: IconType
}


export function PersonalLinkMockup(
  { link, label, Icon, className }: TProps
) {
  return (
    <Link
      href={link}
      className={classNames(`${className}`,{
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
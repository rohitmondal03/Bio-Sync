import Link from "next/link";
import classNames from "classnames";


type TProps = {
  link: string;
  idx: number
}


export function ProjectLinksMockup(
  { link, idx }: TProps
) {
  return (
    <Link
      key={link}
      href={link}
      className={classNames({
        "border-2 border-zinc-500 shadow-lg rounded-xl": true,
        "px-3 py-2": true,
        "text-sm": true,
      })}
    >
      {idx + 1}{". "}{link.replace("https://", "")}
    </Link>
  )
}
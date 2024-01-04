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
        "border border-zinc-500 shadow-[5px_5px_0px] rounded-xl": true,
        "px-3 py-2": true,
        "text-sm": true,
        "hover:shadow-[8px_8px_0px]": true,
        "transition ease-out": true,
      })}
      target="_blank"
    >
      {idx + 1}{". "}{link.replace("https://", "")}
    </Link>
  )
}
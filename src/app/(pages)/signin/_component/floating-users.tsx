import classNames from "classnames"
import { User } from "lucide-react"

import { Skeleton } from "@/components/ui/skeleton"


type TProps = {
  top: string,
  left: string,
  bgColor: string,
  skeleton1Bg: string,
  skeleton2Bg: string,
}


export function FloatingUsersComponent({
  left,
  top,
  bgColor,
  skeleton1Bg,
  skeleton2Bg,
}: TProps
) {
  return (
    <div className={classNames(`${top} ${left} ${bgColor}`, {
      "p-5 rounded-3xl": true,
      "flex flex-row items-center gap-3": true,
      "w-fit relative scale-75": true,
    })}>
      <User color="white" className={classNames({
        "scale-[1.5]": true,
      })} />

      <div className="flex items-center space-x-4">
        <div className="space-y-2">
          <Skeleton className={classNames(`${skeleton1Bg}`, {
            "h-4 w-[200px]": true,
          })} />

          <Skeleton className={classNames(`${skeleton2Bg}`, {
            "h-4 w-[250px]": true,
          })} />
        </div>
      </div>
    </div>
  )
}

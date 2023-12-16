import dynamic from "next/dynamic";
import classNames from "classnames";
import { Delete } from "lucide-react";

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Input = dynamic(() => import("@/components/ui/input").then((mod) => mod.Input))


export default function OtherLinkInputFields(
  { onClick }: { onClick: () => void }
) {
  return (
    <div className={classNames({
      "flex flex-row items-center justify-center gap-x-3": true,
    })}>
      <Input
        type="text"
        placeholder={`enter some other links.....`}
        className={classNames({
          "outline outline-1 outline-zinc-500": true,
        })}
        required
      />

      <Button
        size={"icon"}
        variant={"destructive"}
        className={classNames({})}
        onClick={onClick}
      >
        <Delete className="mr-1" />
      </Button>
    </div>
  )
}
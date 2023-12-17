import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import classNames from "classnames";

export default function PreviewScreen() {
  return (
    <DialogContent className={classNames({
      "w-[80vw]": true,
    })}>
      <DialogHeader>
        hello
      </DialogHeader>
    </DialogContent>
  )
}
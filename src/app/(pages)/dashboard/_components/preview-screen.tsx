import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import classNames from "classnames";

export default function PreviewScreen() {
  return (
    <DialogContent className={classNames({
      "w-screen border-zinc-500 border-2": true,
    })}>
      <DialogHeader>
        
      </DialogHeader>
    </DialogContent>
  )
}
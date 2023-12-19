import dynamic from "next/dynamic";
import { ScreenShare } from "lucide-react";
import classNames from "classnames";

const PreviewScreen = dynamic(() => import("../preview-screen"));
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Sheet= dynamic(() => import("@/components/ui/sheet").then((mod) => mod.Sheet))
const SheetContent= dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetContent))
const SheetTrigger= dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetTrigger))


export default function PreviewButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant={"default"}
          className={`font-bold`}
        >
          Preview <ScreenShare className={`ml-3 scale-90`} />
        </Button>
      </SheetTrigger>

      <SheetContent className={classNames({
        "bg-black": true,
        "rounded-l-xl": true,
      })}>
        <PreviewScreen />
      </SheetContent>
    </Sheet>
  )
}

import dynamic from "next/dynamic";
import { ScreenShare } from "lucide-react";

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))


export default function PreviewButton() {
  return (
    <Button
      type="button"
      variant={"default"}
      className="btn flex lg:hidden"
    >
      Preview <ScreenShare className="icon" />
    </Button>
  )
}

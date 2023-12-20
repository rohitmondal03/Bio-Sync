import dynamic from "next/dynamic";
import { PictureInPicture } from "lucide-react"

import { useData } from "@/hooks/useBioData";

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))

export default function ShowDemoDataButton() {
  return (
    <Button
      type="button"
      className="btn"
    >
      Show Demo <PictureInPicture className="icon" />
    </Button>
  )
}
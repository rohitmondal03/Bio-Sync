import Link from "next/link";
import dynamic from "next/dynamic";
import { SaveIcon, ScreenShare, Send, Github } from "lucide-react";
import classNames from "classnames";

const PreviewScreen= dynamic(() => import("./preview-screen"))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Dialog= dynamic(() => import("@/components/ui/dialog").then((mod) => mod.Dialog))
const DialogTrigger= dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTrigger))


const iconsClass = "ml-3 scale-90"
const btnClass = "font-bold";


export default function FooterButtons() {
  return (
    <div className={classNames({
      "flex flex-row flex-wrap items-center justify-around": true,
      "mt-10": true,
    })}>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"default"}
            className={`${btnClass}`}
          >
            Preview <ScreenShare className={`${iconsClass}`} />
          </Button>
        </DialogTrigger>

        <PreviewScreen />
      </Dialog>

      <Button
        type="submit"
        variant={"default"}
        className={`${btnClass}`}
      >
        Publish <Send className={`${iconsClass}`} />
      </Button>

      <Button
        variant={"default"}
        className={`${btnClass}`}
      >
        Draft <SaveIcon className={`${iconsClass}`} />
      </Button>

      <Link
        target="_blank"
        href={"https://github.com/rohitmondal03/Bio-Sync"}
      >
        <Button
          variant={"default"}
          className={`${btnClass}`}
        >
          Github <Github className={`${iconsClass}`} />
        </Button>
      </Link>
    </div>
  )
}
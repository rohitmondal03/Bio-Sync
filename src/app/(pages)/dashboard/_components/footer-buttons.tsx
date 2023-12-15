import classNames from "classnames";
import { SaveIcon, ScreenShare, Send, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";


const iconsClass = "ml-3 scale-90"
const btnClass = "font-bold";


export default function FooterButtons() {
  return (
    <div className={classNames({
      "flex flex-row flex-wrap items-center justify-around": true,
      "mt-10": true,
    })}>
      <Button
        variant={"default"}
        className={`${btnClass}`}
      >
        Preview <ScreenShare className={`${iconsClass}`} />
      </Button>

      <Button
        type="submit"
        variant={"default"}
        className={`${btnClass}`}
      >
        Publish <Send className={`${iconsClass}`} />
      </Button>

      <Button
        type="submit"
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
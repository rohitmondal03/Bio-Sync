import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function GithublinkButton() {
  return (
    <Link
      target="_blank"
      href={"https://github.com/rohitmondal03/Bio-Sync"}
    >
      <Button
        type="button"
        variant={"default"}
        className= "btn"
      >
        Github <Github className="icon" />
      </Button>
    </Link>
  )
}

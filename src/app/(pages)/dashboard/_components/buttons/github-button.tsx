import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export default function GithubLinkButton() {
  return (
    <Link
      target="_blank"
      href={"https://github.com/rohitmondal03/bio-sync"}
      className="hidden lg:block"
    >
      <Button
        variant={"default"}
        type="button"
        className="btn w-full"
      >
        GitHub <GithubIcon className="icon" />
      </Button>
    </Link>
  )
}

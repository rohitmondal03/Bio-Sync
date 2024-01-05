"use client"

import { Send, LucideTimer } from "lucide-react";
import dynamic from "next/dynamic";
import { useFormStatus } from "react-dom";

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))


export default function PublishBioButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      variant={pending ? "destructive" : "default"}
      className="btn"
    >
      {pending ?
        <>
          Publishing... <LucideTimer className="icon" />
        </>
        :
        <>
          Publish <Send className="icon" />
        </>
      }
    </Button>
  )
}
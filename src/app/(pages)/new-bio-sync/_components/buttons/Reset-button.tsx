import { RefreshCcwDot } from "lucide-react";

import { useData } from "@/hooks/useBioData";
import { Button } from "@/components/ui/button";


export default function ResetButton() {
  const {reset}= useData();

  return (
    <Button
      type="button"
      variant={"default"}
      className="btn"
      onClick={reset}
    >
      Reset <RefreshCcwDot className="icon" />
    </Button>
  )
}

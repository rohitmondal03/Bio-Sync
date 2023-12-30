import classNames from "classnames";
import BioSyncViewWidget from "./_components/BioSyncViewWidget";
import { inter } from "@/lib/fonts";


export default function ViewPage() {
  return(
    <section className={classNames(`${inter.className}`,{
      "px-20 py-24": true,
    })}>
      <BioSyncViewWidget />
    </section>
  )
}
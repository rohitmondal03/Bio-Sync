import classNames from "classnames";
import BioSyncViewWidget from "./_components/BioSyncWidget";
import { inter } from "@/lib/fonts";


export default function ViewPage() {
  return(
    <section className={classNames(`${inter.className}`,{
      "px-2 md:px-20 lg:px-24 py-10 md:py-24": true,
    })}>
      <BioSyncViewWidget />
    </section>
  )
}
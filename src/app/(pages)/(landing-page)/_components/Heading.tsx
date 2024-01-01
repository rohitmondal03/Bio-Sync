import Image from "next/image";
import classNames from "classnames";

import { montserrat } from "@/lib/fonts";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function HeadingText() {
  return (
    <section className={classNames(`${montserrat.className}`, {
      "text-center": true,
      "space-y-24": true,
    })}>
      <div className="space-y-4">
        <h1 className="text-7xl font-bold text-slate-700 underline">BioSync</h1>
        <p className="text-xl text-muted-foreground">Your single link Portfolio....</p>
        <p className="text-2xl text-muted-foreground font-semibold">Share your BioSync&apos;s unique link with anyone <br /> and let them know all about you.</p>
      </div>

      <Image
        src={"./assets/cover_page_img.svg"}
        alt="img"
        height={400}
        width={400}
        className="mx-auto"
        placeholder="blur"
        blurDataURL="./assets/cover_page_img.svg"
      />

      <div className="space-y-5">
        <h1 className="text-4xl font-bold text-slate-700">About</h1>

        <div className="text-xl space-y-5 font-semibold text-zinc-500 w-[40vw] mx-auto">
          <p className="">A modern-day, tech-focused and single-link digital portfolio and resume for letting other users connect with you.</p>
          <p>BioSync is developed with some modern tech-stacks- NextJS, Prisma and TailwindCSS </p>
        </div>
      </div>
    </section>
  )
}
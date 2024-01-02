import dynamic from "next/dynamic";
import Image from "next/image";
import { memo } from "react";
import classNames from "classnames";

import { montserrat } from "@/lib/fonts";
import FeatureSection from "./_components/features-section";

const HeadingText = dynamic(() => import("./_components/heading"))
const AboutText = dynamic(() => import("./_components/about"))


function HomePage() {
  return (
    <section className={classNames({
      "py-16 px-20": true,
      "space-y-28": true,
      "text-center": true,
    })}>
      <HeadingText />
      <Image
        src={"./assets/cover_page_img.svg"}
        alt="img"
        height={400}
        width={400}
        className="mx-auto"
        placeholder="blur"
        blurDataURL="./assets/cover_page_img.svg"
      />
      <AboutText />
      <FeatureSection />
    </section>
  )
}

export default memo(HomePage)
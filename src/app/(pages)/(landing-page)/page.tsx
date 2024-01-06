import dynamic from "next/dynamic";
import Image from "next/image";
import { memo } from "react";
import classNames from "classnames";

import HeadingText from "./_components/heading";
import AboutText from "./_components/about";
import FeatureSection from "./_components/features-section";
import OpenSourcePromotionSection from "./_components/open-source-prom-section";


function HomePage() {
  return (
    <section className={classNames({
      "py-16 px-3 sm:px-6 md:px-12 lg:px-20": true,
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
      <OpenSourcePromotionSection />
    </section>
  )
}

export default memo(HomePage)
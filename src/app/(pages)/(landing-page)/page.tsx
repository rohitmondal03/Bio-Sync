import classNames from "classnames";
import dynamic from "next/dynamic";
import { memo } from "react";

const HeadingText=  dynamic(() => import("./_components/Heading"))


function HomePage() {
  return(
    <section className={classNames({
      "py-16 px-20": true,
    })}>
      <HeadingText />
    </section>
  )
}

export default memo(HomePage)
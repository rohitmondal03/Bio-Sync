import dynamic from "next/dynamic";
import { memo } from "react";

const HeadingText=  dynamic(() => import("./_components/Heading"))


function HomePage() {
  return(
    <>
      <HeadingText />
    </>
  )
}

export default memo(HomePage)
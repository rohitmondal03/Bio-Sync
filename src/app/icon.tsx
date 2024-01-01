import { ImageResponse } from 'next/og'
import Image from 'next/image'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          borderRadius: "5px",
        }}
      >
        <Image
          src={"/assets/web_main_img.svg"}
          alt=''
          {...size}
        />
      </div>
    ),
    size
  )
}
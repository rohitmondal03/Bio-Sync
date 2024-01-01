import { useEffect, useState } from "react"

type TParams = {
  target: HTMLElement
}


export function useHover({ target }: TParams) {
  const [isMouseOver, setMouseOver] = useState<boolean>(false)

  useEffect(() => {
    target.addEventListener("mouseover", () => {
      setMouseOver(true);
    })
    target.addEventListener("mouseout", () => {
      setMouseOver(false);
    });


    return () => {
      target.removeEventListener("mouseover", () => {
        setMouseOver(true);
      })
      target.removeEventListener("mouseout", () => {
        setMouseOver(false);
      });
    }
  })

  return isMouseOver;
}
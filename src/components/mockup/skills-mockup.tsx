import classNames from 'classnames'
import React from 'react'


type TProps = {
  skill: string,
  idx: number,
}


export function SkillsMockup(
  { skill, idx }: TProps
) {
  return (
    <p
      key={skill}
      className={classNames({
        "text-sm font-semibold": true,
        "p-2": true,
        "mx-auto": true,
        "border rounded-lg border-black": true,
        "shadow-[5px_5px_0px]": true,
        "w-64": true,
      })}
    >
      <span className="text-zinc-700">{idx + 1 + ". "}</span>
      <span>{skill}</span>
    </p>
  )
}

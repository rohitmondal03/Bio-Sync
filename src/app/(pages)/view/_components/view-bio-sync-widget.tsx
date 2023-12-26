import Image from 'next/image';
import React from 'react'
import type { TUserBio } from 'types'


type TProps = {
  bioSyncDetails: TUserBio
}

export default function ViewBioSync(
  { bioSyncDetails }: TProps
) {
  const {
    displayProfile,
    profilePicLink,
    name
  }= bioSyncDetails;


  return (
    <div>
      {displayProfile ? 
        <Image src={profilePicLink} alt='profile' height={200} width={200} />
        :
        (
          <>hello my self {name}</>
        )
      }
    </div>
  )
}

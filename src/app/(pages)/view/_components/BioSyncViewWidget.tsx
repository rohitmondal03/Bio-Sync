"use client"

import Image from "next/image";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import type { TUserBio } from "types";


export default function BioSyncViewWidget() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<TUserBio>();

  const bioSyncId = searchParams.get("id");


  useEffect(() => {
    async function getBioSyncDetails() {
      await fetch("/api/getBioSync", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        cache: "no-store",
        body: JSON.stringify({ bioSyncId: bioSyncId }),
      })
        .then((resp) => resp.json())
        .then((data:TUserBio) => setData(data))
    }

    getBioSyncDetails().catch(err => console.log(err));
  }, [bioSyncId])



  return (
    <div>
      {data?.displayProfile ? (
        <Image src={data?.profilePicLink} alt="profile" height={200} width={200} />
      ) : (
        <div>{data?.name}</div>
      )}
    </div>
  )
}

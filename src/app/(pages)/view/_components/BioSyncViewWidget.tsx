"use client"

import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import type { TUserBio } from "types";


export default function BioSyncViewWidget() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<TUserBio>();
  const [loading, setLoading] = useState<boolean>(false)

  const uid = searchParams.get("id");


  useEffect(() => {
    async function getBioSyncDetails() {
      await fetch("/api/getBioSyncByUid", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        cache: "no-store",
        body: JSON.stringify({ uid: uid }),
      })
        .then((resp) => resp.json())
        .then((data: TUserBio) => setData(data))
    }

    getBioSyncDetails().catch(err => console.log(err));
  }, [uid])



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

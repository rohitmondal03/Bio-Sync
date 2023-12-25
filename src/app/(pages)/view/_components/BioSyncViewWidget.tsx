"use client"

import Image from "next/image";
import { notFound, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import type { TUserBio } from "types";
import BioSyncNotFound from "./not-found";
import ViewBioSync from "./view-bio-sync-widget";


export default function BioSyncViewWidget() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<TUserBio>();

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
      {data ?
        <ViewBioSync bioSyncDetails={data} />
        :
        <BioSyncNotFound />
      }
    </div>
  )
}

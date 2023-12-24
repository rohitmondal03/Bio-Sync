"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { TUserBio } from "types";


export default function BioSyncViewWidget() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<TUserBio[]>([]);

  const bioSyncId = searchParams.get("v");


  useEffect(() => {
    async function getBioSyncDetails() {
      await fetch("/api/getBioSync", {
        method: 'GET',
        // headers: {
        //   'content-type': 'application/json'
        // },
        // body: JSON.stringify({ userId: bioSyncId }),
      })
        .then((resp) => resp.json())
        .then((data) => setData(data))
    }

    getBioSyncDetails();

    // console.log(data);
    console.log(bioSyncId);
  }, [])



  return (
    <div>
      {data?.length}
    </div>
  )
}

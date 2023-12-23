"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


export default function BioSyncViewWidget() {
  const searchParams = useSearchParams();
  const [data, setData] = useState();

  const bioSyncId = searchParams.get("v");


  useEffect(() => {
    async function getBioSyncDetails() {
      await fetch("/api/getBioSync", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ bioSyncId: bioSyncId }),
      })
        .then((resp) => resp.json())
        .then((data) => setData(data));
    }

    getBioSyncDetails();

    console.log(data);
    console.log(bioSyncId);
  }, [])



  return (
    <div>
      {/* {getUserUId} */}
    </div>
  )
}

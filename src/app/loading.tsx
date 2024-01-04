import { Skeleton } from "@/components/ui/skeleton";


export default function GlobalLoadingState() {
  return (
    <div className="flex items-center justify-center h-screen space-x-4">
      <Skeleton className="h-12 w-12 rounded-full bg-zinc-400" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-zinc-400" />
        <Skeleton className="h-4 w-[200px] bg-zinc-400" />
      </div>
    </div>
  )
}
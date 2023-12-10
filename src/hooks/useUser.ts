import { useSession } from "next-auth/react";

export function useUser() {
  const { data, status } = useSession();

  return { data, status };
}
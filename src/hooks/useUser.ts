import { useSession } from "next-auth/react";

export function useUser() {
  const { data, status: authStatus } = useSession();

  const useDetails = data?.user;

  return { useDetails, authStatus };
}
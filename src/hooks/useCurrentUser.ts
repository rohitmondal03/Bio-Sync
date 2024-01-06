import { useSession } from "next-auth/react";

export function useCurrentUser() {
  const { data, status: authStatus } = useSession();

  const userDetails = data?.user;

  return { userDetails, authStatus };
}
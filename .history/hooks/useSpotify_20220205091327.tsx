import { useSession } from "next-auth/react";
import { SignIn, useEffect } from 'react';

function useSpotify() {
    const { data: session, status } = useSession();

    useEffect(() => {
      if (session.error === "RefreshAc")
    }, [session])

  return null;
}

export default useSpotify;
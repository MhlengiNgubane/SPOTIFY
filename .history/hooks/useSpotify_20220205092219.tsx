import { signIn, useSession } from "next-auth/react";
import { useEffect } from 'react';

function useSpotify() {
    const { data: session, status } = useSession();

    useEffect(() => {
      // if refresh access token attempt fails, direct user to login
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

      cons
    }, [session])

  return null;
}

export default useSpotify;

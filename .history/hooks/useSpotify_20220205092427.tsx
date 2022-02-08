import { signIn, useSession } from "next-auth/react";
import { useEffect } from 'react';

function useSpotify() {
    const { data: session, status } = useSession();

    useEffect(() => {
      // if refresh access token attempt fails, direct user to login
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

      const queryParamString = new URLSearchParams(params);

      const LOGIN_URL = 
        "https://accounts.spotif"
    }, [session])

  return null;
}

export default useSpotify;

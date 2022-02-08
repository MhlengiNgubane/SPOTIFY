import { signIn, useSession } from "next-auth/react";
import { useEffect } from 'react';
import spotifyApi from "../lib/spotify";

function useSpotify() {
    const { data: session, status } = useSession();

    useEffect(() => {
      if (session) {
      // if refresh access token attempt fails, direct user to login
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

        spotifyApi.setAccessToken(session.user.)
      }
    }, [session]);

  return null;
}

export default useSpotify;



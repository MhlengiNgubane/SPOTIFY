import { signIn, useSession } from "next-auth/react";
import { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-node";
// import spotifyApi from "../lib/spotify";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

function useSpotify() {
    const { data: session, status } = useSession();

    useEffect(() => {
      if (session) {
      // if refresh access token attempt fails, direct user to login
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

        spotifyApi.setAccessToken(accessToken);
      }
    }, [session]);

  return spotifyApi;
}

export default useSpotify;



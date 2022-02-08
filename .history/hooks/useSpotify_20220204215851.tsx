import { useSession } from "next-auth/react";

function useSpotify() {
    const { data: session, status } = useSession();

    useEffect(() => {

    }, [se])

  return null;
}

export default useSpotify;

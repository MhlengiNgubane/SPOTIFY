import { useRecoilState,useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Songs from "../components/Songs";

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div className="text-white">
        {playlist?.tracks.items.map((track) => (
            <Song />

        ))}
    </div>
  );
}

export default Songs;

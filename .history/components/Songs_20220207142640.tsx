import { useRecoilState,useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "../components/Song";

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div className="text-white">
        {playlist?.tracks.items.map((track) => (
            <Song key={} />

        ))}
    </div>
  );
}

export default Songs;

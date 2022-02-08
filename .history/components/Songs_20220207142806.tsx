import { useRecoilState,useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "../components/Song";

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div className="text-white">
        {playlist?.tracks.items.map((track) => (
            <Song key={track.track.id} track={track} order={} />

        ))}
    </div>
  );
}

export default Songs;

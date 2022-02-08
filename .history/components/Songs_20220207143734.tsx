import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "../components/Song";

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div className="px-B flex flex-col space-y- text-white">
        {playlist?.tracks.items.map((track, i) => (
            <Song key={track.track.id} track={track} order={i} />

        ))}
    </div>
  );
}

export default Songs;

import { useRecoilState,useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div>
        {playlist?.tracks.items.map((track) => (
            <div>{track.track}</div>
        ))}
    </div>
  );
}

export default Songs;

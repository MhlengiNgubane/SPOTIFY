import { useRecoilState,useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div className="">
        {playlist?.tracks.items.map((track) => (
            <div>{track.track.name}</div>
        ))}
    </div>
  );
}

export default Songs;

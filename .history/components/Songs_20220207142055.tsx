import { useRecoilState,useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div className="text-white">
        {playlist?.tracks.items.map((track) => (
            <

        ))}
    </div>
  );
}

export default Songs;

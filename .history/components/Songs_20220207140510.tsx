import { useRecoilState,useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div>
        {playlist?.tra}
    </div>
  );
}

export default Songs;

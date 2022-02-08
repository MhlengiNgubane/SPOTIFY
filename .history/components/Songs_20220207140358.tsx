import { useRecoilState,useRecoilValue } from "recoil";
import { playlistState } from ""

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div>
        
    </div>
  );
}

export default Songs;

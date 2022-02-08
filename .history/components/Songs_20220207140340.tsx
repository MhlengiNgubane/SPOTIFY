import { useRecoilState,useRecoilValue } from "recoil";
import { playlist}

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div>
        
    </div>
  );
}

export default Songs;

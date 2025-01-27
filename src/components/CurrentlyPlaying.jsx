import CoverArt from "./CoverArt";
import SongTitle from './SongTitle';
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControls";

export default function CurrentlyPlaying() {
    return (
        <div className="flex flex-col justify-between p-8">
          <div>
            <CoverArt />
            <SongTitle />
            <PlayControls />
            <VolumeControl />
          </div>
        </div>
      );
    }
    
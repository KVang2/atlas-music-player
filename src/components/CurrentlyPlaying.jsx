import CoverArt from "./CoverArt";
import SongTitle from './SongTitle';
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControls";

export default function CurrentlyPlaying() {
    return (
        <div className="flex flex-col justify-between p-8 bg-primary text-text rounded-lg border border-black dark:bg-darkBackground dark:text-darkText w-full h-full">
          <div>
            <CoverArt />
            <SongTitle />
            <PlayControls />
            <VolumeControl />
          </div>
        </div>
      );
    }
    
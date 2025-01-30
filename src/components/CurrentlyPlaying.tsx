import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControls";

// Interface defining shape of song object
interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
  song: string;
}

// Interface defining CurrentlyPlaying component
interface CurrentlyPlayingProps {
  song: Song | undefined;
  isPlaying: boolean;
  onTogglePlay: () => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
  playbackSpeed: number;
  onSpeedChange: (speed: number) => void;
  isShuffling: boolean;
  onToggleShuffle: () => void;
  onNextSong: () => void;
  onPrevSong: () => void;
}

// Component for displaying currently playing song details
export default function CurrentlyPlaying({
  song,
  isPlaying,
  onTogglePlay,
  volume,
  onVolumeChange,
  playbackSpeed,
  onSpeedChange,
  isShuffling,
  onToggleShuffle,
  onNextSong,
  onPrevSong,
}: CurrentlyPlayingProps) {
  return (
    <div className="flex flex-col justify-between p-8 bg-primary text-text rounded-lg border border-black dark:bg-darkBackground dark:text-darkText w-full h-full">
      {song ? (
        <>
          <CoverArt cover={song.cover} songId={song.id} />
          <SongTitle title={song.title} artist={song.artist} />
          <PlayControls 
            isPlaying={isPlaying}
            onTogglePlay={onTogglePlay}
            playbackSpeed={playbackSpeed}
            onSpeedChange={onSpeedChange}
            isShuffling={isShuffling}
            onToggleShuffle={onToggleShuffle}
            onNextSong={onNextSong}
            onPrevSong={onPrevSong}
          />
          <VolumeControl volume={volume} onVolumeChange={onVolumeChange} />
        </>
      ) : (
        <p className="text-center text-gray-400">No song selected</p>
      )}
    </div>
  );
}

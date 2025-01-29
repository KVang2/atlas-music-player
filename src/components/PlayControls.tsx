import { useState } from "react";
import { Rewind, Play, Pause, FastForward, Shuffle } from 'lucide-react';

interface PlayControlsProps {
    currentSongIndex: number;
    totalSongs: number;
    isShuffling: boolean;
    onToggleShuffle: () => void;
    onPrevSong: () => void;
    onNextSong: () => void;
    isPlaying: boolean;
    onTogglePlay: () => void;
}

export default function PlayControls({
    currentSongIndex,
    totalSongs,
    isShuffling,
    onToggleShuffle,
    onPrevSong,
    onNextSong,
    isPlaying,
    onTogglePlay,
}: PlayControlsProps) {
    const [speed, setSpeed] = useState<number>(1);

    const handleSpeedToggle = () => {
      setSpeed((prevSpeed) => (prevSpeed === 0.5 ? 1 : prevSpeed === 1 ? 2 : 0.5));
    };

    return (
        <div className="flex text-center justify-between w-full">
            <button onClick={handleSpeedToggle} className="pl-3" aria-label="Toggle Speed">
                <p className="text-gray-300">{speed}x</p>
            </button>

            <button
                onClick={onPrevSong}
                disabled={currentSongIndex === 0}
                aria-label="Previous Song"
                className={`p-2 ${currentSongIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
                <Rewind className="text-gray-300" />
            </button>

            <button onClick={onTogglePlay} className="border border-gray-300 rounded p-2" aria-label="Play or Pause">
                {isPlaying ? <Pause className="text-gray-300" /> : <Play className="text-gray-300"/>}
            </button>
            <button 
                onClick={onNextSong}
                disabled={!isShuffling && currentSongIndex === totalSongs - 1}
                aria-label="Next Song"
                className={`p-2 ${
                    !isShuffling && currentSongIndex === totalSongs - 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}>
                <FastForward className="text-gray-300"/>
            </button>

            <button onClick={onToggleShuffle} className="pr-3" aria-label="Toggle Shuffle">
                <Shuffle className={`${isShuffling ? "text-secondary": "text-gray-300"}`} />
            </button>
        </div>
    );
}
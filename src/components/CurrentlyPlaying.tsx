import { useState, useEffect } from 'react';
import CoverArt from "./CoverArt";
import SongTitle from './SongTitle';
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControls";

interface Song {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
}

interface CurrentlyPlayingProps {
  songId: string | null;
}

export default function CurrentlyPlaying() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch("/api/v1/playlist");
        const data: Song[] = await response.json();
        setPlaylist(data);
        if (data.length > 0) {
          setCurrentSong(data[0]);
        }
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, []);

  const handleNextSong = () => {
    if (playlist.length === 0) return;

    if (isShuffling) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentSongIndex(randomIndex);
      setCurrentSong(playlist[randomIndex]);
    } else if (currentSongIndex < playlist.length - 1) {
      setCurrentSongIndex((prevIndex) => prevIndex + 1);
      setCurrentSong(playlist[currentSongIndex + 1]);
    }
  };

  const handlePrevSong = () => {
    if (playlist.length === 0) return;

    if (currentSongIndex > 0) {
      setCurrentSongIndex((prevIndex) => prevIndex - 1);
      setCurrentSong(playlist[currentSongIndex - 1]);
    }
  };

  return (
    <div className="flex flex-col justify-between p-8 bg-primary text-text rounded-lg border border-black dark:bg-darkBackground dark:text-darkText w-full h-full">
      {currentSong && (
        <>
          <CoverArt coverArt={currentSong?.coverArt} />
          <SongTitle title={currentSong?.title} artist={currentSong?.artist} />
          <PlayControls 
            currentSongIndex={currentSongIndex}
            totalSongs={playlist.length}
            isShuffling={isShuffling}
            onToggleShuffle={() => setIsShuffling(!isShuffling)}
            onPrevSong={handlePrevSong}
            onNextSong={handleNextSong}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
          />
          <VolumeControl volume={volume} onVolumeChange={setVolume} />
        </>
      )}
    </div>
  );
}

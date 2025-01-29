import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import AudioPlayer from "./AudioPlayer";

interface Song {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  duration: number;
  song: string;
}

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  // Fetch playlist from API
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/v1/playlist");
        const data: Song[] = await response.json();
        setPlaylist(data);

        // Set first song as default
        if (data.length > 0) {
          setCurrentSongId(data[0].id);
        }
      } catch (error) {
        console.error("Error fetching playlist:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaylist();
  }, [])

  // Handle selecting song
  const handleSongSelect = (songId: string) => {
    setCurrentSongId(songId);
    setIsPlaying(true);
  };

  const currentSong = playlist.find(song => song.id === currentSongId);

  return (
    <div className="flex flex-row mx-auto bg-background">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="flex-1 md:basis-1/2 p-4">
          <CurrentlyPlaying
            song={currentSong} 
            isPlaying={isPlaying} 
            onTogglePlay={() => setIsPlaying(!isPlaying)}
            volume={volume} 
            onVolumeChange={setVolume}
            playbackSpeed={playbackSpeed} 
            onSpeedChange={setPlaybackSpeed}
           />
        </div>
        <div className="flex-1 md:basis-1/2 p-4 m-1">
          <Playlist 
            songs={playlist}
            currentSongId={currentSongId}
            onSelectSong={handleSongSelect} />
        </div>
      </div>
      <AudioPlayer 
        song={currentSong?.song || ""}
        isPlaying={isPlaying}
        volume={volume}
        playbackSpeed={playbackSpeed}
      />
    </div>
  )
}

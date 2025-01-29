import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

interface Song {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  duration: number;
}

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch("/api/v1/playlist");
        const data: Song[] = await response.json();
        setPlaylist(data);
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

  return (
    <div className="flex flex-row mx-auto bg-background">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="flex-1 md:basis-1/2 p-4">
          <CurrentlyPlaying songId={currentSongId} />
        </div>
        <div className="flex-1 md:basis-1/2 p-4 m-1">
          <Playlist 
            songs={playlist}
            currentSongId={currentSongId}
            onSelectSong={setCurrentSongId} />
        </div>
      </div>
    </div>
  )
}

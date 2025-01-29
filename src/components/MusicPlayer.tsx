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
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);

  // Fetch playlist from API
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/v1/playlist");
        const data: Song[] = await response.json();

        const songPlaylist = await Promise.all(
          data.map(async (track) => {
            const songResponse = await fetch(`http://localhost:5173/api/v1/songs/${track.id}`);
            const songData = await songResponse.json();

            console.log("Fetch song data:", songData);

            return {
              ...track,
              song: songData.song, 
            }
          })
        );

        console.log("Final Playlist with Cover Art:", songPlaylist);

        setPlaylist(songPlaylist);
        if (songPlaylist.length > 0) {
          setCurrentSongId(songPlaylist[0].id);
        }
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, []);

  // Find current song
  const currentSongIndex = playlist.findIndex(song => song.id === currentSongId);
  const currentSong = playlist[currentSongIndex] || null;

  // Select song
  const handleSongSelect = (songId: string) => {
    setCurrentSongId(songId);
    setIsPlaying(true);
  };

  // Play next song
  const handleNextSong = () => {
    if (!playlist.length || currentSongIndex === -1) return;
    const nextIndex = isShuffling 
      ? Math.floor(Math.random() * playlist.length) 
      : (currentSongIndex + 1) % playlist.length;
    setCurrentSongId(playlist[nextIndex].id);
    setIsPlaying(true);
  };

  // Play previous song
  const handlePrevSong = () => {
    if (!playlist.length || currentSongIndex === -1 || currentSongIndex === 0) return;
    setCurrentSongId(playlist[currentSongIndex - 1].id);
    setIsPlaying(true);
  };

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
            isShuffling={isShuffling}
            onToggleShuffle={() => setIsShuffling(!isShuffling)}
            onNextSong={handleNextSong}
            onPrevSong={handlePrevSong}
          />
        </div>
        <div className="flex-1 md:basis-1/2 p-4 m-1">
          <Playlist songs={playlist} currentSongId={currentSongId} onSelectSong={handleSongSelect} />
        </div>
      </div>
      {currentSong && (
        <AudioPlayer 
          song={currentSong.song}
          isPlaying={isPlaying}
          volume={volume}
          playbackSpeed={playbackSpeed}
        />
      )}
    </div>
  );
}

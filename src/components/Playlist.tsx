import PlayListItem from "./PlayListItem";

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
}

interface PlaylistProps {
  songs: Song[];
  currentSongId: string | null;
  onSelectSong: (songId: string) => void;
}

export default function Playlist({ songs, currentSongId, onSelectSong }: PlaylistProps) {
  return (
    <div className=" bg-primary text-white border border-black rounded-lg dark:bg-darkBackground dark:text-darkText">
        <h1 className="p-1 m-4">Playlist</h1>
        {songs.map((song) => (
            <PlayListItem
                key={song.id}
                title={song.title}
                artist={song.artist}
                duration={song.duration}
                isSelected={song.id === currentSongId}
                onClick={() => onSelectSong(song.id)}
                />
        ))}
    </div>
    );
}
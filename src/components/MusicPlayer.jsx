import CurrentlyPlaying from "./CurrentlyPlaying"
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-row mx-auto">
      <div className="flex flex-col md:flex-row w-full">
      <div className="flex-1 md:basis-1/2 p-4">
          <CurrentlyPlaying />
        </div>
        <div className="flex-1 md:basis-1/2 p-4 m-1">
          <Playlist />
        </div>
      </div>
    </div>
  )
}

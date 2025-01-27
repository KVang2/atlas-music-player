import CoverArt from "./CoverArt";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import SongTitle from './SongTitle';
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControls";
import PlayListItem from "./PlayListItem";
import Playlist from "./Playlist";

export default function App() {
  return (
    <div className="flex flex-col justify-between p-8">
      <div>
        <MusicPlayer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
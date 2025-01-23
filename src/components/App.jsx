import CoverArt from "./CoverArt";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import SongTitle from './SongTitle';
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControls";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <div>
        <MusicPlayer />
      </div>
      <div>
        <CoverArt />
        <SongTitle />
        <PlayControls />
        <VolumeControl />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
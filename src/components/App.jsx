import CoverArt from "./CoverArt";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import SongTitle from './SongTitle';
import PlayControls from "./PlayControls";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer />
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <Footer />
    </div>
  );
}

export default App;
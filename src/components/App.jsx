import Footer from "./Footer.tsx";
import MusicPlayer from "./MusicPlayer.tsx";

export default function App() {
  return (
    <div className="flex flex-col justify-between p-8 bg-gray-600 dark:bg-darkBackground2">
      <div>
        <MusicPlayer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
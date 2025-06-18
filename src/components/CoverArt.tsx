import { useState, useEffect } from "react";

interface CoverArtProps {
  cover: string;
  songId: string;
}

export default function CoverArt({ cover, songId }: CoverArtProps) {
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [showLyrics, setShowLyrics] = useState<boolean>(false);

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await fetch(`/api/v1/songs/${songId}/lyrics`);
        if (!response.ok) throw new Error("Failed to fetch lyrics");
        const data = await response.json();
        setLyrics(data.lyrics);
      } catch (error) {
        console.error("Error fetching lyrics:", error);
      }
    };

    fetchLyrics();
  }, [songId]);

  return (
    <div 
      className="relative flex justify-center"
      onMouseEnter={() => setShowLyrics(true)}
      onMouseLeave={() => setShowLyrics(false)}
    >
      <img
        key={songId}
        src={cover}
        alt="Cover Art"
        className="w-[450px] h-[450px] object-cover rounded-md border border-gray-300"
      />
      {showLyrics && lyrics && (
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 overflow-auto rounded-md">
          <p>{lyrics}</p>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
interface CoverArtProps {
    songId: string;
}

export default function CoverArt({ songId }: CoverArtProps) {
    const [coverArt, setCoverArt] = useState<string | null>(null);

    useEffect(() => {
    const fetchCoverArt = async () => {
      try {
        const response = await fetch(`/api/v1/songs/${songId}`);
        const data = await response.json();
        setCoverArt(data.coverArt || "/default-cover.jpg");
      } catch (error) {
        console.error("Error fetching cover art:", error);
        setCoverArt("/default-cover.jpg");
      }
    };

    fetchCoverArt();
  }, [songId])

    return (
        <div className="flex justify-center">
            <img src={coverArt}
                alt="Cover Art"
                className="w-32 h-32 object-cover rounded-md border border-gray-300" />
        </div>
    );
}
import PlayListItem from "./PlayListItem";
import React, { useState } from "react";

export default function Playlist() {
    const [selectedSong, setSelectedSong] = useState(0);

    const songs = [
        { id: 0, title: "Painted in Blue", artist: "Soul Canvas", duration: 355 },
        { id: 1, title: "Tidal Drift", artist: "Echoes of the Sea", duration: 482 },
        { id: 2, title: "Fading Shadows", artist: "The Emberlight", duration: 181 },
        { id: 3, title: "Cosmic Drift", artist: "Solar Flare", duration: 301 },
        { id: 4, title: "Urban Serenade", artist: "Midnight Groove", duration: 294 },
        { id: 5, title: "Whispers in the Wind", artist: "Rust & Ruin", duration: 373 },
        { id: 6, title: "Electric Fever", artist: "Neon Jungle", duration: 521 },
        { id: 7, title: "Edge of the Abyss", artist: "Steel Horizon", duration: 147 },
        { id: 8, title: "Golden Haze", artist: "Velvet Waves", duration: 195 },
        { id: 9, title: "Shatter the Silence", artist: "Thunderclap Echo", duration: 502 },
    ];

return (
    <div className=" bg-primary text-white border border-black rounded-lg dark:bg-darkBackground dark:text-darkText">
        <h1 className="p-1 m-4">Playlist</h1>
        {songs.map((song) => (
            <PlayListItem
                key={song.id}
                title={song.title}
                artist={song.artist}
                duration={song.duration}
                isSelected={song.id === selectedSong}
                onClick={() => setSelectedSong(song.id)}
                />
        ))}
    </div>
    );
}
import React, { useState } from 'react';

export default function PlayListItem({ title, artist, duration, isSelected, onClick }) {

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);

        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className={`flex text-center gap-5 p-4 ${
            isSelected ? "bg-blue-100" : "hover:bg-gray-100"
        }`}
        onClick={() => {
            console.log(`Clicked on song: ${title}`);
            onClick();
        }}>
            <div>
                <p className="font-bold">{title}</p>
                <p className="text-gray-400">{artist}</p>
            </div>
            <div className="p-3">
                <p className="text-gray-400">{formatTime(duration)}</p>
            </div>
        </div>
    );
}
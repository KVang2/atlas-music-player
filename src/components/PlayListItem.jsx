import React, { useState, useEffect } from 'react';

function PlayListItem() {
    const [duration, setDuration] = useState(521);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);

        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="flex text-center gap-5 p-4">
            <div>
                <p className="font-bold">Electric Fever</p>
                <p className="text-gray-400">Neon Jungle</p>
            </div>
            <div className="p-3">
                <p className="text-gray-400">{formatTime(duration)}</p>
            </div>
        </div>
    );
}

export default PlayListItem;
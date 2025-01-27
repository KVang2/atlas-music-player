import { useState } from 'react';
import { Volume2 } from 'lucide-react';

function VolumeControl() {
    const [volume, setVolume] = useState(50);

    const handleVolume = (event) => {
        setVolume(event.target.value);
    };

    return (
        <div className="flex justify-center gap-2 m-3 pt-4">
            <Volume2 className="m-2"/>
            <input
                type="range"
                min='0'
                max='100'
                value={volume}
                onChange={handleVolume}
                className="mt-4 w-full h-2 rounded-lg cursor-pointer"
            />
        </div>
    );
}

export default VolumeControl;
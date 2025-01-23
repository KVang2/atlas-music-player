import { useState } from 'react';
import { Volume2 } from 'lucide-react';

function VolumeControl() {
    const [volume, setVolume] = useState(50);

    const handleVolume = (event) => {
        setVolume(event.target.value);
    };

    return (
        <div className="flex gap-2">
            <Volume2 />
            <input type="range"
                min='0'
                max='100'
                value={volume}
                onChange={handleVolume}
            />
        </div>
    );
}

export default VolumeControl;
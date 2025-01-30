import { ChangeEvent } from 'react';
import { Volume2 } from 'lucide-react';

interface VolumeControlProps {
    volume: number;
    onVolumeChange: (volume: number) => void;
}

export default function VolumeControl({ volume, onVolumeChange }: VolumeControlProps) {

    const handleVolume = (event: ChangeEvent<HTMLInputElement>) => {
        onVolumeChange(Number(event.target.value));
    };

    return (
        <div className="flex justify-center gap-2 m-3 pt-4 w-full">
            <Volume2 className="m-2"/>
            <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolume}
                className="mt-4 w-full h-2 rounded-lg cursor-pointer dark:bg-darkvolume"
            />
        </div>
    );
}
import {  Rewind, Play, FastForward, Shuffle } from 'lucide-react';

function PlayControls() {
    return (
        <div className="flex text-center justify-between w-full">
            <button className="pl-3">
                <p className="text-gray-300">1x</p>
            </button>
            <button className="p-2">
                <Rewind className="text-gray-300" />
            </button>
            <button className="border border-gray-300 rounded p-2">
                <Play className="text-gray-300"/>
            </button>
            <button className="p-2">
                <FastForward className="text-gray-300"/>
            </button>
            <button className="pr-3">
                <Shuffle className="text-gray-300"/>
            </button>
        </div>
    );
}

export default PlayControls;
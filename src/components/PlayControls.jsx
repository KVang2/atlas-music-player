import {  Rewind, Play, FastForward, Shuffle } from 'lucide-react';

function PlayControls() {
    return (
        <div className="flex text-center gap-4">
            <button>
                <p>1x</p>
            </button>
            <button className="p-2">
                <Rewind className="text-gray-400 fill-current" />
            </button>
            <button className="border border-black rounded p-2">
                <Play className="text-black fill-current"/>
            </button>
            <button className="p-2">
                <FastForward className="text-black fill-current"/>
            </button>
            <button>
                <Shuffle />
            </button>
        </div>
    );
}

export default PlayControls;
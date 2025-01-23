import React from 'react';
import image from '../assets/placeholder.svg';

function CoverArt() {
    return (
        <div>
            <img src={image} alt="PlaceHolder" className="h-full w-full object-cover" />
        </div>
    );
}

export default CoverArt;
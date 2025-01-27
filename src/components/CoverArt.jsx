import React from 'react';
import image from '../assets/placeholder.svg';

function CoverArt() {
    return (
        <div className="flex justify-center">
            <img src={image} alt="PlaceHolder" />
        </div>
    );
}

export default CoverArt;
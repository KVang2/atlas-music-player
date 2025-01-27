import React from 'react';
import image from '../assets/placeholder.svg';

export default function CoverArt() {
    return (
        <div className="flex justify-center">
            <img src={image} alt="PlaceHolder" />
        </div>
    );
}
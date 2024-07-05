import React from 'react';
import '../assets/styles/Polaroid.css'

const Polaroid = ({ src, alt, caption, rotation }) => {

    const rotationStyle = {
        transform: `rotate(${rotation}deg)`,
    };

    return (
    <div className='polaroid' style={rotationStyle}>
        <img
            src={src}
            alt={alt}
        />
        <div className='caption'>
            {caption}
        </div>
    </div>
    );
};

export default Polaroid;

import { useState } from 'react';
import './Artworks.css'; 

function Artworks() {
    const artworks = [
        { id: 1, src: "image/6.jpg", alt: "a painting of a grassy field with trees" },
        { id: 2, src: "image/7.jpg", alt: "a painting of a man sitting in a boat on a river" },
        { id: 3, src: "image/8.jpg", alt: "a painting of a bunch of fruit on a table" },
    ];

    const [current, setCurrent] = useState(0); 

    const goToPrevious = () => {
        setCurrent(current === 0 ? artworks.length - 1 : current - 1);
    };

    const goToNext = () => {
        setCurrent(current === artworks.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="carousel-container">
            <button onClick={goToPrevious} aria-label="Go to previous artwork">&lt;</button>
            <img src={artworks[current].src} alt={artworks[current].alt} className="carousel-image" />
            <button onClick={goToNext} aria-label="Go to next artwork">&gt;</button>
        </div>
    );
}

export default Artworks;

import { useState } from 'react';
import Button from './Button'; 
import './Button.css';

function Card({ title, image, text, onReadMore }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (onReadMore) {
            onReadMore(); 
        }
        setIsClicked(true); 
    };

    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
            <Button
                onClick={handleClick} 
                type="button" 
                visual="link"
            >
                Read More
            </Button>
            {isClicked && <p>Thank you for clicking the button!</p>}
        </div>
    );
}

export default Card;
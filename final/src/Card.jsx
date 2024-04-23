import './Card.css';

function Card({ image, imageAlt, title, text, onReadMore }) {

    const readMoreAriaLabel = `Learn more about ${title}`;
    
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={image} alt={imageAlt} className="card-image" />
                <div className="card-overlay">
                    <div className="card-title">{title}</div>
                    <div className="card-text">{text}</div>
                    {onReadMore && (
                        <button onClick={onReadMore} aria-label={readMoreAriaLabel} className="read-more-button">Learn More</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;

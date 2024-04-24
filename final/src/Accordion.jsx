import { useState } from "react";
import "./Accordion.css";

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <button
                className="accordion__toggle"
                onClick={toggleAccordion}
                aria-expanded={isOpen ? "true" : "false"}
                aria-controls="content"
                aria-label={isOpen ? `Close ${title}` : `Open ${title}`} 
            >
                {isOpen ? "Close" : "Open"} {title}
            </button>
            {isOpen && (
                <div id="content" className="accordion__content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Accordion;
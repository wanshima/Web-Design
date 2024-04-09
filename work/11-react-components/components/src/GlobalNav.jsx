import { useState } from "react";
import menu from "./menu";
import "./GlobalNav.css";

function GlobalNav({ className, setPage }) {
    const [showMenu, setShowMenu] = useState(false);

    const navigate = (path) => {
        setPage(path);
    };

    const list = menu.map(item => (
        <li className="global-nav__item" key={item.name}>
            <button className="global-nav__link" onClick={() => navigate(item.path)}>
                {item.name}
            </button>
        </li>
    ));

    const toggleClass = showMenu ? "" : "global-nav__list--hidden";

    return (
        <nav className={`global-nav ${className}`}>
            <button 
                className="global-nav__toggle"
                onClick={() => setShowMenu(!showMenu)}
                aria-expanded={showMenu ? "true" : "false"}
            >
                {showMenu ? "Close Menu" : "Open Menu"}
            </button>
            <ul className={`global-nav__list ${toggleClass}`}>
                {list}
            </ul>
        </nav>
    );
}


export default GlobalNav;
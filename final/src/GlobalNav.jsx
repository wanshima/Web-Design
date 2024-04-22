import React, { useState } from "react";
import menu from "./menu";  
import "./GlobalNav.css";

function GlobalNav({ className, setPage }) {
    const [showMenu, setShowMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState({});

    const navigate = (path) => {
        setPage(path);
        setActiveMenu({}); 
        setShowMenu(false); 
    };

    const toggleSubMenu = (e, name) => {
        e.preventDefault();
        e.stopPropagation(); 
        setActiveMenu(prev => {
            const newState = { ...prev, [name]: !prev[name] }; 
            console.log(newState); 
            return newState;
        });
    };

    const toggleMenu = () => {
        setShowMenu(prev => !prev);  
    };

    const list = menu.map(item => (
        <li className="global-nav__item" key={item.name}>
            <button className="global-nav__link"
                    aria-expanded={item.submenu ? activeMenu[item.name] : undefined}
                    onClick={(e) => item.submenu ? toggleSubMenu(e, item.name) : navigate(item.path)}>
                {item.name}
            </button>

            {item.submenu && activeMenu[item.name] && (
                <ul className="global-nav__submenu">
                    {item.submenu.map(subitem => (
                        <li key={subitem.name}>
                            <button onClick={() => navigate(subitem.path)}>
                                {subitem.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    ));

    return (
        <nav className={`global-nav ${className}`}>
            <button 
                className="global-nav__toggle" 
                onClick={toggleMenu}
                aria-expanded={showMenu}
                aria-label="Toggle navigation"
            >
                {showMenu ? '✕' : '☰'}
            </button>
            <ul className={`global-nav__list ${showMenu ? "show" : ""}`}>
                {list}
            </ul>
        </nav>
    );
}

export default GlobalNav;

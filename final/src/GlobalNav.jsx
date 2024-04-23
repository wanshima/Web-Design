import React, { useState } from "react";
import menu from "./menu";
import "./GlobalNav.css";

function GlobalNav({ className, setPage }) {
    const [showMenu, setShowMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState({});

    const navigate = (path, event) => {
        event.preventDefault();
        setPage(path);
        setShowMenu(false);
        setActiveMenu({});
    };

    const toggleSubMenu = (e, name) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveMenu(prev => ({
            ...prev,
            [name]: !prev[name]  
        }));
    };

    const toggleMenu = () => {
        setShowMenu(prev => !prev);
    };

    const list = menu.map(item => (
        <li className="global-nav__item" key={item.name}>
            {item.submenu ? (
                <a href="#" className="global-nav__link" aria-expanded={activeMenu[item.name] || false} onClick={(e) => toggleSubMenu(e, item.name)}>
                    {item.name}
                </a>
            ) : (
                <a href={item.path} className="global-nav__link" onClick={(e) => navigate(item.path, e)}>
                    {item.name}
                </a>
            )}

            {item.submenu && activeMenu[item.name] && (
                <ul className="global-nav__submenu">
                    {item.submenu.map(subitem => (
                        <li key={subitem.name}>
                            <a href={subitem.path} onClick={(e) => navigate(subitem.path, e)} className="global-nav__submenu-link">
                                {subitem.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    ));

    return (
        <nav className={`global-nav ${className}`}>
            <button className="global-nav__toggle" onClick={toggleMenu} aria-expanded={showMenu} aria-label="Toggle navigation">
                {showMenu ? '✕' : '☰'}
            </button>
            <ul className={`global-nav__list ${showMenu ? "show" : ""}`}>
                {list}
            </ul>
        </nav>
    );
}

export default GlobalNav;

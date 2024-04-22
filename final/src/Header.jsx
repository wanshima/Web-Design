import GlobalNav from "./GlobalNav";
import "./Header.css";

function Header({ setPage }) {
    return (
        <header className="header">
            <a href="/">
                <img 
                    src="image/logo.jpg"
                    className="header__logo"
                    alt="a sunset over a body of water"
                />
            </a>
            <h1 className="header__title">
                Vincent van Gogh Biography, Life and Times
            </h1>
            <GlobalNav className="header__nav" setPage={setPage}/>
        </header>
    );
}


export default Header;
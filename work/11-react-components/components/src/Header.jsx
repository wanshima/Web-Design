import GlobalNav from "./GlobalNav";
import "./Header.css";

function Header({ setPage }) {
    return (
        <header className="header">
            <img 
                src="images/1.jpg"
                className="header__logo"
                alt="russian blue cat wearing yellow sunglasses"
            />
            <h1 className="header__title">
                Fluffy Friends
            </h1>
            <GlobalNav className="header__nav" setPage={setPage}/>
        </header>
    );
}


export default Header;
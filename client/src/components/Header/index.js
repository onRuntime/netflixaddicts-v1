import React, {useContext, useRef} from "react";
import {Link} from "react-router-dom";
import SearchContext from "../pages/Search/context";

const Header = () => {
    const nav = React.createRef();

    const inputRef = useRef(null);
    const {searchInput, updateSearchInput} = useContext(SearchContext);

    return (
        <header>
            <nav className="navbar" ref={nav}>
                <div className="logo">
                    <Link to="/">
                        <h1>NetflixAddicts</h1>
                    </Link>
                </div>
                <ul className="nav">
                    <li className="nav-item active">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#">Séries</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Films</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Discord</a>
                    </li>
                </ul>
                <div className="search-form">
                    <i className="ri-search-2-line"/>
                    <input
                        className="search-input"
                        type="text"
                        name="q"
                        ref={inputRef}
                        value={searchInput}
                        onChange={(e) => updateSearchInput(e.currentTarget.value)}
                        placeholder="Titre, personnages, genres"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;

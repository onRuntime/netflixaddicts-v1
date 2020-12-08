import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {

    const nav = React.createRef();
    const searchInput = React.createRef();
    let lastScrollY = 0;
    let ticking = false;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })

    const handleScroll = () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (lastScrollY >= 110 && nav.current.classList && !nav.current.classList.contains('sticky')) nav.current.classList.add('sticky');
                else if (lastScrollY < 110 && nav.current.classList.contains('sticky')) nav.current.classList.remove('sticky');
                ticking = false;
            });
            ticking = true;
        }
    };

    return (
        <header>
            <nav className="navbar" ref={nav}>
                <div className="logo"><Link to='/'><h1>NetflixAddicts</h1></Link></div>
                <ul className="nav">
                    <li className="nav-item active"><Link to='/'>Accueil</Link></li>
                    <li className="nav-item"><a href="#">Séries</a></li>
                    <li className="nav-item"><a href="#">Films</a></li>
                    <li className="nav-item"><a href="#">Discord</a></li>
                </ul>
                <form className="search-form" action="search" method="GET">
                    <i className="ri-search-2-line"></i>
                    <input className="search-input" type="text" name="q" placeholder="Titre, personnages, genres" ref={searchInput} />
                </form>
            </nav>
        </header>
    );
}

export default Header;
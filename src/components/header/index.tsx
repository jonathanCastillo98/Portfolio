import React, { useState } from 'react'
import './header.css'

const Header = () => {

    window.addEventListener("scroll", () => {
        // Change header bg
        const header = document.querySelector(".header");
        if (window.scrollY >= 80) {
            header?.classList.add("scroll-header")
        }
        else {
            header?.classList.remove("scroll-header")
        }
    }
    )

    const [displayMenu, setDisplayMenu] = useState(false);

    const handleOnOpenMenu = () => {
        setDisplayMenu(true);
    }
    const handleOnCloseMenu = () => {
        setDisplayMenu(false);
    }


    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">JC</a>

                <div className={displayMenu ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualifications" className="nav__link">
                                <i className="uil uil-award-alt nav__icon"></i>Qualifications
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#certifications" className="nav__link">
                                <i className="uil uil-award-alt nav__icon"></i>Certifications
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={handleOnCloseMenu}></i>
                </div>

                <div className="nav__toggle" onClick={handleOnOpenMenu}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <header>
                <div className="header__content--wrapper">

                    <Link to="/">
                        <img id="ofour-icon" src="/app/src/assets/images/logo.png" alt="O'Four Logo" />
                    </Link>
                    <h1> O'Four - Portfolio </h1>

                    <div className="header__link--container">
                        <Link to="/contact" className="contact__link header__link">
                            <nav>
                                <img className="contact__icon icon" src="/app/src/assets/icons/contact_icon.png" alt="contact-icon" /> Contact
                            </nav>
                        </Link>
                        <Link to="about" className="about__link header__link">
                            <nav>
                                <img className="about__icon icon" src="/app/src/assets/icons/about_icon.png" alt="about-icon" /> About
                            </nav>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

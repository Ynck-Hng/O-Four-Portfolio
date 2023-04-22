import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    const isClicked = useState(false);

    return (
        <>
            <header>
                <div className="header__content--wrapper">

                    <Link to="/" id="ofour__icon--wrapper">
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

                    <div className="header__burger--menu">
                        <span className='burger__top burger__line'></span>
                        <span className='burger__mid burger__line'></span>
                        <span className='burger__bot burger__line'></span>
                    </div>
                </div>
            </header>
            <div className="header__burger--content">
                <button className='header__burger--close'>
                    <span className='burger__cross--close burger__cross'> + </span>
                </button>
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
        </>
    )
}

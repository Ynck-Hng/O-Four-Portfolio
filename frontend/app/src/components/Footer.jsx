import React from 'react'

export default function Footer() {
    return (
        <footer>
            <nav>
                <a href="https://github.com/Ynck-Hng" target="_blank" className="footer__link"> <img className="github__icon icon" src="/app/src/assets/icons/github_icon.png" alt="github-icon" /> Github </a>
            </nav>

            <nav>
                <a href="https://www.linkedin.com/in/yannick-huang/" target="_blank" className="footer__link"> <img className="linkedin__icon icon" src="/app/src/assets/icons/linkedin_icon.png" alt="linkedin-icon" /> Linkedin </a>
            </nav>

        </footer>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function HomePage() {

    document.title = "O'Four - Accueil";

    return (
        <div className="home__container">
            <div className="home__description--container">
                <h2 className="home__title"> Que manger... ? </h2>
                <span className="home__description">
                    Eh ! Toi aussi tu ne sais pas quoi manger ? Ca tombe bien, j'ai développé un petit outil rien que pour toi !
                    <br />
                    <br />
                </span>
                <span className="home__description">Appuie sur ce bouton et tu trouveras (peut-être) ton repas !</span>
                <Link to="/recipe" className="home__generate--button">
                    Générer
                </Link>
            </div>
        </div>
    )
}

import React from 'react'

export default function About() {

    document.title = `O'Four - About`;

    return (
        <>
            <div className="about__container">

                <div className="about__top">

                    <div className="about__title--container">
                        <h2 className="about__title"> Cékwa O'Four ? </h2>
                    </div>
                </div>

                <div className="about__bottom">

                    <div className="about__description--container">
                        <span className="about__description">
                            O'Four est un générateur de recette qui a pour objectif de résoudre la question légendaire qui se pose à l'heure du repas : "que manger ?".
                            <br />
                            <br />
                            C'est également un projet réalisé dans le but de mettre en pratique la logique du framework React avec React Router et de la combiner avec une petite API développée avec NodeJS et Express.
                        </span>
                    </div>

                    <div className="about__img--container">
                        <img className="about__img" src="/app/src/assets/images/logo.png" alt="O'Four-logo" />
                    </div>
                </div>

            </div>
        </>
    )
}

import React from 'react';

export default function Contact() {
    document.title = `O'Four - Contact`;

    return (
        <>
            <div className="contact__container">
                <div className="contact__title--container">
                    <h2 className="contact__title"> Si tu veux me remercier, c'est juste en bas ! </h2>
                </div>

                <form method="POST" className="contact__form" onSubmit={(e) => e.preventDefault()}>

                    <div className="form__top">
                        <label htmlFor="firstname" className="contact__label"> Prénom :
                            <input type="text" id="firstname" className="contact__firstname contact__input" placeholder="Votre prénom..." required />
                        </label>

                        <label htmlFor="lastname" className="contact__label"> Nom de famille :
                            <input type="text" id="lastname" className="contact__lastname contact__input" placeholder="Votre nom..." required />
                        </label>
                    </div>

                    <div className="form__bottom">
                        <label htmlFor="email" className="contact__label"> Email :
                            <input type="email" id="email" className="contact__email contact__input" placeholder="Votre email..." required />
                        </label>

                        <label htmlFor="phone" className="contact__label"> Numéro :
                            <input type="tel" id="phone" className="contact__phone contact__input" placeholder="Votre numéro..." required />
                        </label>
                    </div>


                    <label htmlFor="message" className="contact__label contact__textarea--label"> Message :
                        <textarea type="textarea" id="message" className="contact__firstname" placeholder="Votre message..." />
                    </label>


                    <button type="submit" className="contact__submit--button"> Envoyer </button>
                </form>
            </div>

        </>
    )
}

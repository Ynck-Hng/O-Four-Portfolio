import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function Error() {
    document.title = `O'Four - Error`;
    const [redirectReady, setRedirectReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRedirectReady(true)
        }, 3000)
    }, [])

    if (redirectReady) {
        return <Navigate to="/recipe" />;
    }

    return (
        <div className="error__container">

            <div className="error__img--container">
                <img className="error__img" src="https://i.redd.it/g7hatq3mr5941.png" alt="Jojo-Dio" />
            </div>

            <div className="error__message--container">
                <span className="error__message"> Ah c'est toi haha ! Il semblerait que tu te sois perdu, laisse moi te raccompagner vers l'accueil... haha... </span>
            </div>

        </div>
    )
}

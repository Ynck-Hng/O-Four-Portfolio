import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GenerateRecipe from '../components/GenerateRecipe';
import axios from 'axios';
export default function RandomRecipePage({ viewedRecipeList, PORT }) {
    const [randomRecipe, setRandomRecipe] = useState();

    const navigate = useNavigate();

    const getRandomRecipe = async () => {
        try {
            const value = await axios.get(`http://localhost:${PORT}/recipe`);
            setRandomRecipe(value.data);
        } catch (error) {
            navigate("/error");
        }
    }

    useEffect(() => {
        getRandomRecipe();
        document.title = "O'Four - Recette aléatoire"
    }, [])

    return (
        <>
            <div className="random__recipe--page-container">

                <div className="random__recipe--page-top">
                    <div className="random__recipe--title-container">
                        <h2 className="random__recipe--title recipe__title">
                            <img className="random__icon icon" src="/app/src/assets/icons/random_icon.png" alt="random-icon" />
                            Recette aléatoire
                        </h2>
                    </div>

                    {randomRecipe ? <GenerateRecipe recipe={randomRecipe} /> :

                        <div className="viewed__recipe--container recipe__container no__viewed--recipe no__generated--recipe">
                            <h2 className="viewed__recipe--name recipe__name"> Aucune recette générée </h2>
                        </div>
                    }
                </div>

                <div className="random__recipe--separator"></div>

                <div className="random__recipe--page-bottom">
                    <div className="viewed__recipe--title-container">
                        <h2 className="viewed__recipe--title recipe__title">
                            <img className="history__icon icon" src="/app/src/assets/icons/history_icon.png" alt="history-icon" />
                            Recette(s) consultée(s)
                        </h2>
                    </div>

                    {viewedRecipeList.length > 0 ? viewedRecipeList?.map(
                        (viewedRecipe) =>
                            <GenerateRecipe key={viewedRecipe.id} recipe={viewedRecipe} />
                    ) :
                        <div className="viewed__recipe--container recipe__container">
                            <h2 className="viewed__recipe--name recipe__name no__viewed--recipe"> Aucune recette consultée récemment </h2>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

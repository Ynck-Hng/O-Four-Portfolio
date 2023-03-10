import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function RecipePage({ PORT, addViewedRecipe, currentRecipeHistory }) {
    const recipeId = useParams();
    const [recipe, setRecipe] = useState();

    const navigate = useNavigate();

    const getRecipe = async () => {
        try {
            const value = await axios.get(`http://localhost:${PORT}/recipe/${recipeId.recipeId}`);

            if (!value) {
                navigate("/error");
            }
            setRecipe(value.data);

            const foundRecipe = currentRecipeHistory?.find(recipe => recipe.id === value.data.id);
            let isFound = foundRecipe ? true : false;
            switch (true) {
                case (!isFound && currentRecipeHistory?.length < 5):
                    let newRecipeHistory = currentRecipeHistory?.reverse();
                    newRecipeHistory = [...newRecipeHistory, value.data];
                    addViewedRecipe(newRecipeHistory.reverse());
                    break;
                case (!isFound && currentRecipeHistory?.length >= 5):
                    let spliceFirstRecipeHistory = currentRecipeHistory?.reverse().slice(1);
                    spliceFirstRecipeHistory = [...spliceFirstRecipeHistory, value.data];
                    addViewedRecipe(spliceFirstRecipeHistory.reverse());
                    break;
                case (isFound):
                    let filteredRecipeHistory = currentRecipeHistory?.reverse().filter((recipe) => recipe.id !== value.data.id);
                    filteredRecipeHistory = [...filteredRecipeHistory, value.data];
                    addViewedRecipe(filteredRecipeHistory.reverse());
                    break;
                default:
                    break;
            }
        } catch (error) {
            navigate("/error");
        }
    }
    useEffect(() => {
        getRecipe();
    }, []);

    useEffect(() => {
        console.log("from recipe page", currentRecipeHistory);
    }, [currentRecipeHistory])
    document.title = `O'Four - ${recipe?.name}`;

    return (
        <>
            <div className="recipe__page--container">

                <div className="recipe__page--top-container">
                    <div className="recipe__page--title-container">
                        <h2 className="recipe__page--title"> {recipe?.name} - Note : {recipe?.grade} &#9734; </h2>
                    </div>

                    <article className="recipe__page--top">
                        <div className="recipe__page--img-container">
                            <img className="recipe__page--img" src={recipe ? `/app/src/assets/images/${recipe?.name}.jpg` : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} alt={recipe ? `${recipe?.name}` : "placeholder"} />
                        </div>

                        <section className="recipe__ingredients--container">

                            <h3 className="recipe__ingredients--title">
                                <img className="ingredient__icon icon" src="/app/src/assets/icons/ingredient_icon.png" alt="ingredient-icon" />
                                Ingrédients
                            </h3>

                            <ul className="recipe__ingredients--list">
                                {recipe?.ingredients.map(element =>
                                    <li className="ingredient" key={element.ingredient.id}> {element.ingredient.name.charAt(0).toUpperCase() + element.ingredient.name.slice(1).toLowerCase()} </li>
                                )}
                            </ul>
                        </section>
                    </article>
                </div>

                <section className="recipe__page--bottom">
                    <h3 className="recipe__steps--title">
                        <img className="step__icon icon" src="/app/src/assets/icons/step_icon.png" alt="step-icon" />
                        Étapes
                    </h3>
                    <ol className="recipe__steps--list">
                        {
                            recipe?.steps.map(step => <li className="step" key={step.id}> {step.content} </li>)
                        }
                    </ol>
                </section>
            </div>

        </>
    )
}

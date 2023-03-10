import React from 'react';
import { Link } from 'react-router-dom';
export default function GenerateRecipe({ recipe }) {
    return (
        <>
            <Link to={`/recipe/${recipe.id}`}>
                <div className="viewed__recipe--container recipe__container">
                    <div className="viewed__recipe--img-container recipe__img--container">
                        <img className="viewed__recipe--img recipe__img" src={recipe ? `/app/src/assets/images/${recipe.name}.jpg` : "/app/src/assets/images/element-eplaceholder.webp"} alt={recipe ? recipe?.name : "placeholder"} />
                    </div>

                    <div className="viewed__recipe--description-container recipe__description--container">
                        <h2 className="viewed__recipe--name recipe__name"> {recipe?.name} </h2>

                        <div className="viewed__recipe--description recipe__description">
                            <span>{recipe?.description}</span>
                        </div>

                        <div className="viewed__recipe--grade recipe__grade">
                            <span> Note : {recipe?.grade} &#9734;</span>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    )
}

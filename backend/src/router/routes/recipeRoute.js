const express = require("express");
const router = express.Router();
const recipeController = require("./../../controllers/recipeController");
const {errorCatcher} = require("./../../utils/errorHandler");

/**
 * @route GET /recipe
 * @group O'Four - Recipe
 * @returns {Object} 200 - Object containing a recipe and its ingredients.
 * @returns {Error} 404 - 404 Recipe Not Found
 */

router.get("/", errorCatcher(recipeController.findRandomRecipe));

/**
 * @route GET /recipe/:recipeId
 * @group O'Four - Recipe
 * @param {Int} recipeId - Id of a recipe
 * @returns {Object} 200 - Object containing the recipe and its ingredients based on recipeId
 * @returns {Error} 404 - 404 Recipe Not Found
 */

router.get("/:recipeId(\\d+)", errorCatcher(recipeController.findOneRecipe));
module.exports = router;
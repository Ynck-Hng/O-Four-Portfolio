const express = require("express");
const router = express.Router();
const recipeRoute = require("./routes/recipeRoute");

router.use("/recipe", recipeRoute);

module.exports = router;
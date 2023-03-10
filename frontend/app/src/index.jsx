import React, { useState } from "react";
import "./../styles/css/styles.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import RecipePage from "./pages/RecipePage";
import RandomRecipePage from "./pages/RandomRecipePage";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {

  // If the API server is runnin on another PORT
  // change the PORT value here

  const PORT = 3000;

  const [viewedRecipe, setViewedRecipe] = useState([]);

  return (
    <Routes>
      <Route exact path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe" element={<RandomRecipePage viewedRecipeList={viewedRecipe} PORT={PORT} />} />
        <Route path="/recipe/:recipeId" element={<RecipePage PORT={PORT} addViewedRecipe={setViewedRecipe} currentRecipeHistory={viewedRecipe} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

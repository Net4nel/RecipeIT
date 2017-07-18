import React from "react";
import {IndexRoute, Route} from "react-router";

import App from "components/App";
import HomePage from "components/home/container/HomePage";
import Recipe from "components/recipe/container/Recipe";
import SearchPage from "components/searchRecipe/container/SearchPage";
import RecipeListPage from "components/recipeList/container/RecipeListPage";
import RecipePage from "components/recipe-page/container/RecipePage";
import AboutUs from "components/common/AboutUs";


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/newRecipe" component={Recipe}/>
        <Route path="/sp" component={SearchPage}/>
            <Route path="/about" component={AboutUs}/>
        <Route path='/recipes/:id' component={RecipePage} />
        <Route path="/recipes" component={RecipeListPage} />
    </Route>
);


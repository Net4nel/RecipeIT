import React from "react";
import {IndexRoute, Route} from "react-router";

import App from "components/App";
import HomePage from "components/home/container/HomePage";
import Recipe from "components/recipe/container/Recipe";
import SearchPage from "components/searchRecipe/container/SearchPage";


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/newRecipe" component={Recipe}/>
        <Route path="/sp" component={SearchPage}/>

    </Route>
);


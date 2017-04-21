import React from "react";
import {IndexRoute, Route} from "react-router";

import App from "components/App";
import HomePage from "components/home/container/HomePage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        {/*<Route path="/tips" component={Recipe}/>*/}
    </Route>
);


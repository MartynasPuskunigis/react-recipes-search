import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomeView } from "./home-view";
import { ActiveRecipeContainer } from "./../active-recipe-container";

export class Router extends React.Component {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomeView} exact />
                    <Route path="/recipe/:id" component={ActiveRecipeContainer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

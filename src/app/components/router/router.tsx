import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomeView } from "../home/home-view";
import { ActiveRecipeContainer } from "../../containers/active-recipe-containers/active-recipe-container";
import { FavRecipesView } from "../fav-recipe/fav-recipes-view";

export class Router extends React.Component {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomeView} exact />
                    <Route path="/recipe/:id" component={ActiveRecipeContainer} />
                    <Route path="/favorites" component={FavRecipesView} />
                </Switch>
            </BrowserRouter>
        );
    }
}
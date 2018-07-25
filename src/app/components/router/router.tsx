import * as React from "react";
import { Switch, Route, Router } from "react-router-dom";

import { AppHistory } from "./app-history";
import { HomeView } from "../home/home-view";
import { RecipesView } from "../recipe/recipes-view";
import { FavRecipesView } from "../fav-recipe/fav-recipes-view";
import { ActiveRecipeContainer } from "../../containers/active-recipe-container";

export class AppRouter extends React.Component {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <Router history={AppHistory}>
                <div>
                    <HomeView />
                    <Switch>
                        <Route path="/recipe/:id" component={ActiveRecipeContainer} />
                        <Route path="/favorites" component={FavRecipesView} />
                        <Route path="/recipes/:searchQuery" component={RecipesView} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

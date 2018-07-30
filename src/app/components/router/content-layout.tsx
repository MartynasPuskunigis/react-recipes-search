import * as React from "react";
import { Switch, Route } from "react-router-dom";

import { RecipesView } from "../recipe/recipes-view";
import { FavRecipesView } from "../fav-recipe/fav-recipes-view";
import { PageNotFoundView } from "../notfound/page-not-found-view";
import { ActiveRecipeContainer } from "../../containers/active-recipe-container";

import "./content-layout.css";

export class ContentLayoutView extends React.Component {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="content-layout">
                <Switch>
                    <Route path="/" component={RecipesView} exact />
                    <Route path="/recipe/:id" component={ActiveRecipeContainer} />
                    <Route path="/favorites" component={FavRecipesView} />
                    <Route path="/recipes/:searchQuery" component={RecipesView} />
                    <Route component={PageNotFoundView} />
                </Switch>
            </div>
        );
    }
}

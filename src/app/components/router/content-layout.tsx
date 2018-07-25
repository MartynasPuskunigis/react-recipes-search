import * as React from "react";
import { Switch, Route } from "react-router-dom";

import { HomeView } from "../home/home-view";
import { FavRecipesView } from "../fav-recipe/fav-recipes-view";
import { ActiveRecipeContainer } from "../../containers/active-recipe-container";

import "./content-layout.css";

export class ContentLayoutView extends React.Component {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="content-layout">
                <Switch>
                    <Route path="/" component={HomeView} exact />
                    <Route path="/recipe/:id" component={ActiveRecipeContainer} />
                    <Route path="/favorites" component={FavRecipesView} />
                    {this.props.children}
                </Switch>
            </div>
        );
    }
}

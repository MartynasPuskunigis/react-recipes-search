import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomeView } from "../home/home-view";
import { HeaderView } from "../header/header-view";
import { FooterView } from "../footer/footer-view";
import { FavRecipesView } from "../fav-recipe/fav-recipes-view";
import { ActiveRecipeContainer } from "../../containers/active-recipe-container";

import "./router.css";

export class Router extends React.Component {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <BrowserRouter>
                <div className="router">
                    <HeaderView />
                    <div className="content">
                        <Switch>
                            <Route path="/" component={HomeView} exact />
                            <Route path="/recipe/:id" component={ActiveRecipeContainer} />
                            <Route path="/favorites" component={FavRecipesView} />
                        </Switch>
                    </div>
                    <FooterView />
                </div>
            </BrowserRouter>
        );
    }
}

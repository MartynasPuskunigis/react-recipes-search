import * as React from "react";

import { SearchView } from "../search/search-view";
import { RecipesContainer } from "../../containers/recipes-containers/recipes-container";

import "./home-view.css";

export class HomeView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="home-view">
                <SearchView/>
                <RecipesContainer/>
            </div>
        );
    }
}

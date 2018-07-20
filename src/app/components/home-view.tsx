import * as React from "react";

import { SearchView } from "./search-view";
import { RecipesContainer } from "../recipes-container";

export class HomeView extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="App">
                <SearchView/>
                <RecipesContainer/>
            </div>
        );
    }
}

import * as React from "react";

import { RecipesContainer } from "../recipes-container";
import { SearchView } from "./search-view";

export class HomeView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="App">
                <SearchView />
                <RecipesContainer />
            </div>
        );
    }
}

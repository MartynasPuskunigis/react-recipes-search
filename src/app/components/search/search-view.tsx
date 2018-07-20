import * as React from "react";
import { Link } from "react-router-dom";

import { RecipesActionsCreators } from "../../actions/recipes-actions-creators";

export class SearchView extends React.Component {
    protected onSearchBoxActivated: React.KeyboardEventHandler<HTMLInputElement> = event => {
            if (event.key === "Enter") {
                RecipesActionsCreators.searchForRecipes(event.currentTarget.value);
            }
    };

    public render(): JSX.Element {
        return (
            <div>
                <input onKeyPress={this.onSearchBoxActivated} type="text" placeholder="Search for a recipe..." />
                <Link to="/favorites">My favorites</Link>
            </div>
        );
    }
}

import * as React from "react";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

import { RecipesActionsCreators } from "../../actions/recipes-actions-creators";

export class SearchView extends React.Component {
    protected onSearchBoxChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        RecipesActionsCreators.searchForRecipes(event.target.value);
    };

    public render(): JSX.Element {
        return (
            <div>
                <DebounceInput minLength={2} debounceTimeout={500} onChange={this.onSearchBoxChange} />
                <Link to="/favorites">My favorites</Link>
            </div>
        );
    }
}

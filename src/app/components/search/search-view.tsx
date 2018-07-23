import * as React from "react";
import { Link } from "react-router-dom";

import { AppHistory } from "../router/app-history";

export class SearchView extends React.Component {
    protected onSearchBoxActivated: React.KeyboardEventHandler<HTMLInputElement> = event => {
        if (event.key === "Enter") {
            AppHistory.push({ pathname: `/recipes/${event.currentTarget.value}` });
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

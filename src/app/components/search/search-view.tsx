import * as React from "react";

import { AppHistory } from "../router/app-history";

import "./search-view.css";

export class SearchView extends React.Component {
    protected onSearchBoxActivated: React.KeyboardEventHandler<HTMLInputElement> = event => {
        if (event.key === "Enter") {
            AppHistory.push({ pathname: `/recipes/${event.currentTarget.value}` });
        }
    };

    public render(): JSX.Element {
        return (
            <div className="search-view">
                <div className="wrapper">
                    <div className="logo">
                        <div className="fas fa-utensils logo-img"></div>
                        <div className="logo-text">Martin's kitchen</div>
                    </div>
                    <div className="title-text">What would you like to make today?</div>
                    <div className="description">We give you access to over 200000 recipes from numerous blogs and recipe sites</div>
                    <div className="search-wrapper">
                        <input
                            className="search-input"
                            onKeyPress={this.onSearchBoxActivated}
                            type="text"
                            placeholder="Search by recipe title..."
                        />
                    </div>
                </div>
            </div>
        );
    }
}

import * as React from "react";
import { DebounceInput } from "react-debounce-input";

import { AppHistory } from "../router/app-history";

import "./search-view.css";

export class SearchView extends React.Component {
    protected onSearchBoxActivated: React.ChangeEventHandler<HTMLInputElement> = event => {
        if (event.target.value !== "") {
            AppHistory.push({ pathname: `/recipes/${event.target.value}` });
        }
    };

    public render(): JSX.Element {
        return (
            <div>
                <div className="search-view">
                    <div className="wrapper">
                        <div className="logo">
                            <div className="fas fa-utensils logo-img" />
                            <div className="logo-text">Martin's kitchen</div>
                        </div>
                        <div className="title-text">What would you like to make today?</div>
                        <div className="description">We give you access to over 200000 recipes from numerous blogs and recipe sites</div>
                        <div className="search-wrapper">
                            <DebounceInput
                                className="search-input"
                                onChange={this.onSearchBoxActivated}
                                type="text"
                                placeholder="Search by recipe title..."
                                minLength={2}
                                debounceTimeout={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

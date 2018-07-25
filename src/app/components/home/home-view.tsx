import * as React from "react";

import { SearchView } from "../search/search-view";

import "./home-view.css";

export class HomeView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="home-view">
                <SearchView />
            </div>
        );
    }
}

import * as React from "react";

import "./no-favorites-view.css";

export class NoFavoritesView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="no-favorites-view">
                <div className="wrapper">
                    <div className="fas fa-crow no-favorites-img" />
                    <div className="no-favorites-header">You have no favorite recipes!</div>
                    <div className="no-favorites-text">You can add any recipe to your favorites by searching it and clicking the star!</div>
                </div>
            </div>
        );
    }
}

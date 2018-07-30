import * as React from "react";

import { FavRecipesContainer } from "../../containers/fav-recipes-containers/fav-recipes-container";

import "./fav-recipes-view.css";

export class FavRecipesView extends React.Component {
    public componentDidMount(): void {
        window.scrollTo(0, 0);
    }

    public render(): JSX.Element {
        return (
            <div className="fav-recipes-view">
                <div className="fav-recipes-banner">
                    <div className="wrapper">
                        <div className="banner-text">These are your favorite recipes</div>
                    </div>
                </div>
                <div className="wrapper">
                    <FavRecipesContainer />
                </div>
            </div>
        );
    }
}

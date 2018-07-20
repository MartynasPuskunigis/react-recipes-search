import * as React from "react";
import { Link } from "react-router-dom";

import { FavRecipesContainer } from "../../containers/fav-recipes-containers/fav-recipes-container";

export class FavRecipesView extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="fav-recipes-view">
                <div>
                    <div>These are your favorite recipes</div>
                    <Link to="/">Go to home page</Link>
                </div>
                <FavRecipesContainer/>
            </div>
        );
    }
}

import * as React from "react";
import { Link } from "react-router-dom";

import { RecipesActionsCreators } from "../recipes-actions-creators";
import { Recipe } from "../contracts/Recipe";

interface Props {
    recipeToDisplay: Recipe;
}

export class FavRecipesItemView extends React.Component<Props> {
    private handleFavoriteClick(event: React.MouseEvent<HTMLDivElement>, recipeId: string): void {
        RecipesActionsCreators.removeRecipeFromFavourites(recipeId);
    }

    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="recipes__box">
                <img className="recipe__box-img" src={this.props.recipeToDisplay.image_url} alt={this.props.recipeToDisplay.title} />
                <div className="recipe__text">
                    <h5 className="recipes__title">{this.props.recipeToDisplay.title}</h5>
                    <p className="recipes__subtitle">
                        Publisher: <span>{this.props.recipeToDisplay.publisher}</span>
                    </p>
                    <div onClick={event => this.handleFavoriteClick(event, this.props.recipeToDisplay.recipe_id)} className="fas fa-star" />
                </div>
                <button className="recipe_buttons">
                    <Link to={`/recipe/${this.props.recipeToDisplay.recipe_id}`}>View Recipe</Link>
                </button>
            </div>
        );
    }
}

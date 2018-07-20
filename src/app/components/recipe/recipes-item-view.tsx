import * as React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { RecipesActionsCreators } from "../../actions/recipes-actions-creators";
import { Recipe } from "../../contracts/Recipe";

import "./recipes-item-view.css";

interface Props {
    recipe: Recipe;
    isFavorite: boolean;
}

export class RecipesItemView extends React.Component<Props> {
    private handleFavoriteClick(event: React.MouseEvent<HTMLDivElement>, recipeId: string): void {
        let notificationText: string = "";
        if (this.props.isFavorite) {
            notificationText = "Recipe removed from favorites";
            RecipesActionsCreators.removeRecipeFromFavourites(recipeId);
        } else {
            notificationText = "Recipe added to favorites";
            RecipesActionsCreators.addRecipeToFavourites(recipeId);
        }
        toast.success(notificationText, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="recipes-item-view">
                <img className="recipe-box-img" src={this.props.recipe.image_url} alt={this.props.recipe.title} />
                <div className="recipe-text">
                    <h5 className="recipes-title">
                        {this.props.recipe.title.length < 20
                            ? `${this.props.recipe.title}`
                            : `${this.props.recipe.title.substring(0, 25)}...`}
                    </h5>
                    <p className="recipes-subtitle">
                        Publisher: <span>{this.props.recipe.publisher}</span>
                    </p>
                    {this.props.isFavorite !== true ? (
                        <div className="far fa-star" onClick={event => this.handleFavoriteClick(event, this.props.recipe.recipe_id)} />
                    ) : (
                        <div className="fas fa-star" onClick={event => this.handleFavoriteClick(event, this.props.recipe.recipe_id)} />
                    )}
                </div>
                <button className="recipe-buttons">
                    <Link to={`/recipe/${this.props.recipe.recipe_id}`}>View Recipe</Link>
                </button>
            </div>
        );
    }
}

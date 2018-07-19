import * as React from "react";
import * as ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

import { Recipe } from "./../contracts/Recipe";
import { RecipesActionsCreators } from "./../recipes-actions-creators";

interface Props {
    recipe: Recipe;
    isFavorite: boolean;
}

export class FavRecipesItemView extends React.Component<Props> {
    private handleFavoriteClick(event: React.MouseEvent<HTMLDivElement>, recipeId: string): void {
        if (this.props.isFavorite) {
            RecipesActionsCreators.removeRecipeFromFavourites(recipeId);
        } else {
            RecipesActionsCreators.addRecipeToFavourites(recipeId);
        }
    }

    public render(): JSX.Element | JSX.Element[] {
        let favouriteButtonClassName: string;
        if (this.props.isFavorite !== true) {
            favouriteButtonClassName = "far fa-star star-icon-empty";
        } else {
            favouriteButtonClassName = "fas fa-star star-icon-full";
        }
        return (
            <div className="recipes-box">
                <img className="recipe-box-img" src={this.props.recipe.image_url} alt={this.props.recipe.title} />
                <div className="recipe-text">
                    <a className="recipes-title" data-tip data-for={this.props.recipe.recipe_id}>
                        {this.props.recipe.title}
                    </a>
                    <ReactTooltip id={this.props.recipe.recipe_id} type="dark" effect="float">
                        <span>{this.props.recipe.title}</span>
                    </ReactTooltip>
                    <p className="recipes-subtitle">
                        Publisher: <span>{this.props.recipe.publisher}</span>
                    </p>
                    <div
                        className={favouriteButtonClassName}
                        onClick={event => this.handleFavoriteClick(event, this.props.recipe.recipe_id)}
                    />
                </div>
                <button className="recipe-buttons">
                    <Link to={`/recipe/${this.props.recipe.recipe_id}`}>View Recipe</Link>
                </button>
            </div>
        );
    }
}

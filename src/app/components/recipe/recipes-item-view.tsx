import * as React from "react";
import * as ReactTooltip from "react-tooltip";
import * as classNames from "classnames";
import { Link } from "react-router-dom";

import { RecipesActionsCreators } from "../../actions/recipes-actions-creators";
import { Recipe } from "../../contracts/Recipe";

import "./recipe-item-view.css";

interface Props {
    recipe: Recipe;
    isFavorite: boolean;
}

export class RecipesItemView extends React.Component<Props> {
    private handleFavoriteClick(event: React.MouseEvent<HTMLDivElement>, recipeId: string): void {
        if (this.props.isFavorite) {
            RecipesActionsCreators.removeRecipeFromFavourites(recipeId);
        } else {
            RecipesActionsCreators.addRecipeToFavourites(recipeId);
        }
    }

    public render(): JSX.Element | JSX.Element[] {
        const favouriteButtonClassName = classNames(
            {
                "far fa-star": !this.props.isFavorite,
                "fas fa-star": this.props.isFavorite
            },
            {
                "star-icon-empty": !this.props.isFavorite,
                "star-icon-full": this.props.isFavorite
            }
        );

        return (
            <div className="recipes-item-view">
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
                <Link className="recipe-buttons" to={`/recipe/${this.props.recipe.recipe_id}`}>
                    View Recipe
                </Link>
            </div>
        );
    }
}

import * as React from "react";
import * as ReactTooltip from "react-tooltip";
import * as classNames from "classnames";
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
                <img
                    className="recipe-box-img"
                    src={this.props.recipe.image_url}
                    alt={this.props.recipe.title}
                    onError={event => {
                        event.currentTarget.src = "../../../assets/recipe-placeholder.png";
                    }}
                />
                <div className="recipe-text">
                    <div className="recipe-header">
                        <div
                            className={classNames(
                                {
                                    "far fa-star": !this.props.isFavorite,
                                    "fas fa-star": this.props.isFavorite
                                },
                                {
                                    "star-icon-empty": !this.props.isFavorite,
                                    "star-icon-full": this.props.isFavorite
                                }
                            )}
                            onClick={event => this.handleFavoriteClick(event, this.props.recipe.recipe_id)}
                        />
                        <a className="recipes-title" data-tip data-for={this.props.recipe.recipe_id}>
                            {this.props.recipe.title}
                        </a>
                        <ReactTooltip id={`${this.props.recipe.recipe_id}`} type="dark" effect="float">
                            <span>{this.props.recipe.title}</span>
                        </ReactTooltip>
                    </div>
                    <p className="recipes-subtitle">
                        Publisher: <span>{this.props.recipe.publisher}</span>
                    </p>
                </div>
                <Link to={`/recipe/${this.props.recipe.recipe_id}`} className="recipe-buttons">
                    View Recipe
                </Link>
            </div>
        );
    }
}

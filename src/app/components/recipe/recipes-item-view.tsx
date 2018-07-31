import * as React from "react";
import * as ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { RecipesActionsCreators } from "../../actions/recipes-actions-creators";
import { Recipe } from "../../contracts/Recipe";
import { Spinner } from "../../spinner/spinner";
import { TextSpinner } from "../../textspinner/text-spinner";

import "./recipes-item-view.css";

interface Props {
    recipe?: Recipe;
    isFavorite?: boolean;
}

export class RecipesItemView extends React.Component<Props> {
    private handleFavoriteClick(event: React.MouseEvent<HTMLDivElement>, recipeId: string): void {
        let notificationText: string = "";
        if (this.props.isFavorite) {
            /* Exclamation mark at this.props.recipe! because it is checked to not be null or undefined
            in the render method before coming to handleFavoriteClick method.*/
            notificationText = `${this.props.recipe!.title} was removed from favorites`;
            RecipesActionsCreators.removeRecipeFromFavourites(recipeId);
        } else {
            /* Exclamation mark at this.props.recipe! because it is checked to not be null or undefined
            in the render method before coming to handleFavoriteClick method.*/
            notificationText = `${this.props.recipe!.title} was added to favorites`;
            RecipesActionsCreators.addRecipeToFavourites(recipeId);
        }
        toast.success(notificationText, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    public render(): JSX.Element {
        if (this.props.recipe == null) {
            return (
                <div className="recipes-item-view">
                    <div className="recipe-box-img">
                        <Spinner />
                    </div>
                    <div className="recipe-text">
                        <div className="recipes-title">
                            <TextSpinner />
                        </div>
                        <div className="recipes-subtitle">
                            <TextSpinner />
                        </div>
                    </div>
                    <div className="recipe-buttons">View Recipe</div>
                </div>
            );
        }

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
                            className={this.props.isFavorite ? "fas fa-star star-icon-full" : "far fa-star star-icon-empty"}
                            /* Exclamation mark at this.props.recipe! because I am checking at the start of render method whether
                            this.props.recipe is undefined or null. */
                            onClick={event => this.handleFavoriteClick(event, this.props.recipe!.recipe_id)}
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

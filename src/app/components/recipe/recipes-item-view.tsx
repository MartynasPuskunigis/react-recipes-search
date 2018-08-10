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

interface State {
    isBeingUpdated: boolean;
    currentImgUrlInput: string;
    currentTitleInput: string;
    currentPublisherInput: string;
}

export class RecipesItemView extends React.Component<Props, State> {
    public state: State = {
        ...this.state,
        isBeingUpdated: false
    };

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

    private onDeleteClick(event: React.MouseEvent<HTMLButtonElement>, recipeId: string): void {
        /* Exclamation mark at this.props.recipe! because it is checked to not be null or undefined
            in the render method before coming to onDeleteClick method.*/
        const notificationText = `${this.props.recipe!.title} was removed from the database`;
        toast.info(notificationText, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        RecipesActionsCreators.deleteRecipe(recipeId);
    }

    private onEditClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        this.setState({
            isBeingUpdated: true
        });
    };

    private onDoneEditClick(event: React.MouseEvent<HTMLDivElement>, recipe: Recipe): void {
        const updatedRecipe: Recipe = {
            _id: recipe._id,
            image_url: this.state.currentImgUrlInput,
            publisher: this.state.currentPublisherInput,
            source_url: recipe.source_url,
            title: this.state.currentTitleInput
        };
        RecipesActionsCreators.updateRecipe(updatedRecipe);
        this.setState({
            isBeingUpdated: false
        });
        /* Exclamation mark at this.props.recipe! because it is checked to not be null or undefined
            in the render method before coming to onDoneEditClick method.*/
        const notificationText = `${this.props.recipe!.title} was updated successfully`;
        toast.info(notificationText, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    private onEditImgUrlInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentImgUrlInput: event.target.value
        });
    };

    private onEditTitleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentTitleInput: event.target.value
        });
    };

    private onEditPublisherInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentPublisherInput: event.target.value
        });
    };

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

        if (this.state.isBeingUpdated) {
            return (
                <div className="recipes-item-view">
                    <div className="recipe-box-img">
                        <input onChange={this.onEditImgUrlInputChange} type="text" defaultValue={this.props.recipe.image_url} />
                    </div>
                    <div className="recipe-text">
                        <div className="recipes-title">
                            <input onChange={this.onEditTitleInputChange} type="text" defaultValue={this.props.recipe.title} />
                        </div>
                        <div className="recipes-subtitle">
                            <input onChange={this.onEditPublisherInputChange} type="text" defaultValue={this.props.recipe.publisher} />
                        </div>
                    </div>

                    <div
                        /* Exclamation mark at this.props.recipe! because I am checking at the start
                         of render method whether this.props.recipe is undefined or null. */
                        onClick={event => this.onDoneEditClick(event, this.props.recipe!)}
                        className="recipe-buttons"
                    >
                        Done
                    </div>
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
                            onClick={event => this.handleFavoriteClick(event, this.props.recipe!._id!)}
                        />
                        <a className="recipes-title" data-tip data-for={this.props.recipe._id}>
                            {this.props.recipe.title}
                        </a>
                        <ReactTooltip id={`${this.props.recipe._id}`} type="dark" effect="float">
                            <span>{this.props.recipe.title}</span>
                        </ReactTooltip>
                    </div>
                    <p className="recipes-subtitle">
                        Publisher: <span>{this.props.recipe.publisher}</span>
                    </p>
                </div>
                <button
                    /* Exclamation mark at this.props.recipe! because I am checking at the start of render
                     method whether this.props.recipe is undefined or null. */
                    onClick={event => this.onDeleteClick(event, this.props.recipe!._id!)}
                >
                    Delete
                </button>
                <button onClick={this.onEditClick}>Edit</button>
                <Link to={`/recipe/${this.props.recipe._id}`} className="recipe-buttons">
                    View Recipe
                </Link>
            </div>
        );
    }
}

import * as React from "react";
import { toast } from "react-toastify";

import { RecipesActionsCreators } from "../../actions/recipes-actions-creators";
import { Recipe } from "../../contracts/Recipe";

import "./add-my-recipe-view.css";

interface State {
    currentTitleInput: string;
    currentNameInput: string;
    currentUrlInput: string;
    currentInstructionInput: string;
}

export class AddMyRecipeView extends React.Component<{}, State> {
    private onSubmitClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        const newRecipe: Recipe = {
            image_url: this.state.currentUrlInput,
            publisher: this.state.currentNameInput,
            source_url: this.state.currentInstructionInput,
            title: this.state.currentTitleInput
        };
        RecipesActionsCreators.addNewRecipe(newRecipe);
        /* Exclamation mark at this.props.recipe! because it is checked to not be null or undefined
            in the render method before coming to onDeleteClick method.*/
        const notificationText = `${newRecipe.title} was added to the database successfully`;
        toast.success(notificationText, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    private onCurrentTitleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentTitleInput: event.target.value
        });
    };

    private onCurrentNameInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentNameInput: event.target.value
        });
    };

    private onCurrentUrlInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentUrlInput: event.target.value
        });
    };

    private onCurrentInstructionInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentInstructionInput: event.target.value
        });
    };

    public render(): JSX.Element {
        return (
            <div className="add-my-recipe-view">
                <div className="wrapper">
                    <div className="input-fields">
                        <div className="input-field">
                            <input onChange={this.onCurrentTitleInputChange} type="text" placeholder="Recipe title" />
                        </div>
                        <div className="input-field">
                            <input onChange={this.onCurrentNameInputChange} type="text" placeholder="Your name" />
                        </div>
                        <div className="input-field">
                            <input onChange={this.onCurrentUrlInputChange} type="text" placeholder="Image url" />
                        </div>
                        <div className="input-field">
                            <input onChange={this.onCurrentInstructionInputChange} type="text" placeholder="Recipe instructions" />
                        </div>
                    </div>
                    <button onClick={this.onSubmitClick} className="submit-button">
                        Submit my recipe
                    </button>
                </div>
            </div>
        );
    }
}

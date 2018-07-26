import * as React from "react";

import { Recipe } from "../../contracts/Recipe";

import "./active-recipe-view.css";

interface Props {
    recipeToDisplay: Recipe;
}

export class ActiveRecipeView extends React.Component<Props> {
    public componentDidMount(): void {
        window.scrollTo(0, 0);
    }

    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="active-recipe-view">
                {this.props.recipeToDisplay != null && (
                    <div className="active-recipe">
                        <div className="active-recipe-title">{this.props.recipeToDisplay.title}</div>
                        <img
                            className="active-recipe-img"
                            src={this.props.recipeToDisplay.image_url}
                            alt={this.props.recipeToDisplay.title}
                        />
                        <div className="recipe-details">
                            <div className="wrapper">
                                <div className="ingredients-box">
                                    <div className="ingredients-list-header">The ingredients you will need</div>
                                    <div className="ingredients-list">
                                        {this.props.recipeToDisplay.ingredients.map((ingredient, index) => (
                                            <div key={`ingredient-item-${ingredient}-${index}`}>{ingredient}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="recipe-info">
                                    <div className="wrapper">
                                        <div className="active-recipe-publisher">
                                            Publisher: <span>{this.props.recipeToDisplay.publisher}</span>
                                        </div>
                                        <div className="active-recipe-website">
                                            Website:
                                            <span>
                                                <a href={this.props.recipeToDisplay.source_url}> Check out recipe here!</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

import * as React from "react";
import { Link } from "react-router-dom";

import { Recipe } from "../../contracts/Recipe";

import "./active-recipe-view.css";

interface Props {
    recipeToDisplay: Recipe;
}

export class ActiveRecipeView extends React.Component<Props> {
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
                            <div className="ingredients-box">
                                <div className="ingredients-list-header">The ingredients you will need</div>
                                <div className="ingredients-list">
                                    {this.props.recipeToDisplay.ingredients.map((ingredient, index) => (
                                        <div key={`ingredient-item-${ingredient}-${index}`}>{ingredient}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="recipe-info">
                                <h4 className="active-recipe-publisher">
                                    Publisher: <span>{this.props.recipeToDisplay.publisher}</span>
                                </h4>
                                <p className="active-recipe-website">
                                    Website:
                                    <span>
                                        <a href={this.props.recipeToDisplay.source_url}>"Check out recipe here!"</a>
                                    </span>
                                </p>

                                <button className="active-recipe-button">
                                    <Link to="/">Go Home</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

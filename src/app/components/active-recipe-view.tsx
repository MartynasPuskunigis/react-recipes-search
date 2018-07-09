import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Recipe } from "./../contracts/Recipe";

interface Params {
    id: string;
}

interface Props extends RouteComponentProps<Params> {
    activeRecipe: Recipe;
}

export class ActiveRecipeView extends React.Component<Props> {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="container">
                {this.props.activeRecipe != null && (
                    <div className="active-recipe">
                        <img className="active-recipe__img" src={this.props.activeRecipe.image_url} alt={this.props.activeRecipe.title} />
                        <h3 className="active-recipe__title">{this.props.activeRecipe.title}</h3>
                        <h4 className="active-recipe__publisher">
                            Publisher: <span>{this.props.activeRecipe.publisher}</span>
                        </h4>
                        <p className="active-recipe__website">
                            Website:
                            <span>
                                <a href={this.props.activeRecipe.publisher_url}>{this.props.activeRecipe.publisher_url}</a>
                            </span>
                        </p>
                        <button className="active-recipe__button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

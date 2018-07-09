import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Container } from "flux/utils";

import { Recipe } from "./contracts/Recipe";
import { RecipesReduceStore } from "./recipes-store";
import { RecipesActionsCreators } from "./recipes-actions-creators";

interface Params {
    id: number;
}

interface Props extends RouteComponentProps<Params> {
    activeRecipe: Recipe;
}

interface State {
    activeRecipe: Recipe;
}

class ActiveRecipeContainerClass extends React.Component<Props, State> {

    public static getStores(): Container.StoresList {
        return [RecipesReduceStore];
    }

    public static calculateState(state: State): State {
        return {
            activeRecipe: RecipesReduceStore.getState().activeRecipe,
        };
    }

    public componentDidMount(): void {
        RecipesActionsCreators.reassignNewActiveRecipe(this.props.match.params.id);
    }

    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="container">
                {this.state.activeRecipe != null && (
                    <div className="active-recipe">
                        <img className="active-recipe__img" src={this.state.activeRecipe.image_url} alt={this.state.activeRecipe.title} />
                        <h3 className="active-recipe__title">{this.state.activeRecipe.title}</h3>
                        <h4 className="active-recipe__publisher">
                            Publisher: <span>{this.state.activeRecipe.publisher}</span>
                        </h4>
                        <p className="active-recipe__website">
                            Website:
                            <span>
                                <a href={this.state.activeRecipe.publisher_url}>{this.state.activeRecipe.publisher_url}</a>
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

export const ActiveRecipeContainer = Container.create(ActiveRecipeContainerClass);

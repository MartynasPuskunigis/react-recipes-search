import * as React from "react";
import { Container } from "flux/utils";

import { Recipe } from "./contracts/Recipe";
import { RecipesReduceStore } from "./recipes-store";
//import { RecipesActionsCreators } from "./recipes-actions-creators";
import { RecipesItemView } from "./components/recipes-item-view";
import { LoadingView } from "./components/loading-view";

interface State {
    recipes: Recipe[];
    isLoading: boolean;
}

class RecipesContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [RecipesReduceStore];
    }

    public static calculateState(state: State): State {
        return {
            recipes: RecipesReduceStore.getState().recipes,
            isLoading: RecipesReduceStore.getState().isLoading
        };
    }

    public render(): JSX.Element | JSX.Element[] {
        if (this.state.recipes === null || this.state.recipes === undefined) {
            return <div>Nieko</div>;
        }
        if (this.state.isLoading === true) {
            return <LoadingView />;
        } else {
            let recipesList;
            recipesList = this.state.recipes.map(recipe => <RecipesItemView  key={`recipe-item-${recipe.recipe_id}`} recipe={recipe} />);
            return (
                <div>
                    <div className="container">
                        <div className="row">{recipesList}</div>
                    </div>
                </div>
            );
        }
    }
}
export const RecipesContainer = Container.create(RecipesContainerClass);

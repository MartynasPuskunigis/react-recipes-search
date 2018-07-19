import * as React from "react";
import { Container } from "flux/utils";

import { RecipesReduceStore } from "../../stores/recipes-store";
import { Abstractions } from "simplr-flux";
import { RecipesItemContainer } from "./recipes-item-container";
import { Spinner } from "../../spinner/spinner";

import "./recipes-container.css";

interface State {
    recipes: string[];
    status: Abstractions.ItemStatus;
}

class RecipesContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [RecipesReduceStore];
    }

    public static calculateState(state: State): State {
        const { recipes, status } = RecipesReduceStore.getState();

        return {
            status: status,
            recipes: recipes
        };
    }

    public render(): JSX.Element | JSX.Element[] {
        if (this.state.status === Abstractions.ItemStatus.Pending) {
            return <Spinner/>;
        }
        if (this.state.recipes == null || this.state.recipes.length === 0) {
            return <div>No results found...</div>;
        }
        const recipeList = this.state.recipes.map((recipeId, index) => (
            <RecipesItemContainer key={`recipe-item-${recipeId}-${index}`} recipeId={recipeId} />
        ));
        return <div className="recipe-list">{recipeList}</div>;
    }
}
export const RecipesContainer = Container.create(RecipesContainerClass);

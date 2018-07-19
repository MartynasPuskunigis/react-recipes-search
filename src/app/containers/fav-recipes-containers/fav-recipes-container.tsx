import * as React from "react";
import { Container } from "flux/utils";

import { FavRecipesReduceStore } from "../../stores/fav-recipes-store";
import { FavRecipesItemContainer } from "./fav-recipes-item-container";

interface State {
    recipes: string[];
}

class RecipesContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [FavRecipesReduceStore];
    }

    public static calculateState(state: State): State {
        const { favRecipes } = FavRecipesReduceStore.getState();

        return {
            recipes: favRecipes
        };
    }

    public render(): JSX.Element | JSX.Element[] {
        const recipeList = this.state.recipes.map((recipeId, index) => (
            <FavRecipesItemContainer key={`recipe-item-${recipeId}-${index}`} recipeId={recipeId} />
        ));
        if (this.state.recipes == null || this.state.recipes.length === 0) {
            return <div>No results found...</div>;
        } else {
            return <div className="recipe-list">{recipeList}</div>;
        }
    }
}
export const FavRecipesContainer = Container.create(RecipesContainerClass);

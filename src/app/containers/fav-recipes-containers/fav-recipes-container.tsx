import * as React from "react";
import { Container } from "flux/utils";

import { FavRecipesItemContainer } from "./fav-recipes-item-container";
import { FavRecipesReduceStore } from "../../stores/fav-recipes-store";

interface State {
    recipesIds: string[];
}

class RecipesContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [FavRecipesReduceStore];
    }

    public static calculateState(state: State): State {
        const { favRecipes } = FavRecipesReduceStore.getState();
        return {
            ...state,
            recipesIds: favRecipes
        };
    }

    public render(): JSX.Element | JSX.Element[] {
        if (this.state.recipesIds == null || this.state.recipesIds.length === 0) {
            return <div>You have no favorite recipes...</div>;
        }
        const recipeList = this.state.recipesIds.map(recipeId => (
            <FavRecipesItemContainer key={`recipe-item-${recipeId}`} recipeId={recipeId} />
        ));
        return <div className="recipe-list">{recipeList}</div>;
    }
}
export const FavRecipesContainer = Container.create(RecipesContainerClass);

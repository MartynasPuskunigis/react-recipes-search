import * as React from "react";
import { Container } from "flux/utils";

import { FavRecipesReduceStore } from "./fav-recipes-store";
import { FavRecipesItemContainer } from "./fav-recipes-item-container";

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
        const recipeList = this.state.recipesIds.map((recipeId, index) => (
            <FavRecipesItemContainer key={`recipe-item-${recipeId}-${index}`} recipeId={recipeId} />
        ));
        return <div className="recipe-list">{recipeList}</div>;
    }
}
export const FavRecipesContainer = Container.create(RecipesContainerClass);

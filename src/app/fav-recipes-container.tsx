import * as React from "react";
import { Container } from "flux/utils";
//import { Abstractions } from "simplr-flux";

import { FavRecipesReduceStore } from "./fav-recipes-store";
import { FavRecipesItemContainer } from "./fav-recipes-item-container";
//import { Spinner } from "./spinner/spinner";
//import { Recipe } from "./contracts/Recipe";

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

import * as React from "react";
import { Container } from "flux/utils";
import { Abstractions } from "simplr-flux";

import { FavRecipesReduceStore } from "../../stores/fav-recipes-store";
import { FavRecipesItemContainer } from "./fav-recipes-item-container";
import { Spinner } from "../../spinner/spinner";

interface State {
    recipes: string[];
    status: Abstractions.ItemStatus;
}

class RecipesContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [FavRecipesReduceStore];
    }

    public static calculateState(state: State): State {
        const { favRecipes, status } = FavRecipesReduceStore.getState();

        return {
            recipes: favRecipes,
            status: status
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
            <FavRecipesItemContainer key={`recipe-item-${recipeId}-${index}`} recipeId={recipeId} />
        ));
        return <div className="recipe-list">{recipeList}</div>;
    }
}
export const FavRecipesContainer = Container.create(RecipesContainerClass);

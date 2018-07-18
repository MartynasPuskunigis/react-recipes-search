import * as React from "react";
import { Container } from "flux/utils";
import { Abstractions } from "simplr-flux";

import { FavRecipesReduceStore } from "./fav-recipes-store";
import { FavRecipesItemContainer } from "./fav-recipes-item-container";
import { Spinner } from "./spinner/spinner";
import { Recipe } from "./contracts/Recipe";

interface State {
    recipesIds: string[];
    status: Abstractions.ItemStatus;
    recipes: Recipe[];
}

class RecipesContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [FavRecipesReduceStore];
    }

    public static calculateState(state: State): State {
        const { favRecipes, status } = FavRecipesReduceStore.getState();

        return {
            ...state,
            recipesIds: favRecipes,
            status: status
        };
    }

    public componentDidMount(): void {
        const favRecipes: Recipe[] | null = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key != null && localStorage.getItem(key) != null) {
                const item = JSON.parse(localStorage.getItem(key)!);
                favRecipes.push(item);
            }
        }
        console.log(favRecipes);
        this.setState({
            recipes: [...favRecipes]
        });
    }

    public render(): JSX.Element | JSX.Element[] {
        // if (this.state.status === Abstractions.ItemStatus.Pending) {
        //     return <Spinner />;
        // }
        if (this.state.recipes == null || this.state.recipes.length === 0) {
            return <div>No results found...</div>;
        }
        const recipeList = this.state.recipes.map((recipe, index) => (
            <FavRecipesItemContainer key={`recipe-item-${recipe}-${index}`} recipe={recipe} />
        ));
        return <div className="recipe-list">{recipeList}</div>;
    }
}
export const FavRecipesContainer = Container.create(RecipesContainerClass);

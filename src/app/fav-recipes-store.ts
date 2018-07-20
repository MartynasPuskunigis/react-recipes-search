import { ReduceStore } from "simplr-flux";

import { RemoveRecipeFromFavoriteListAction, AddRecipeToFavoriteListAction } from "./recipes-actions";

interface StoreState {
    favRecipes: string[];
}

class FavRecipesReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(AddRecipeToFavoriteListAction, this.onAddNewFavorite.bind(this));
        this.registerAction(RemoveRecipeFromFavoriteListAction, this.onDeleteFavorite.bind(this));
    }

    private onDeleteFavorite(action: AddRecipeToFavoriteListAction, state: StoreState): StoreState {
        localStorage.removeItem(action.recipeId);
        const nextState = {
            ...state
        };
        for (let i = 0; i < nextState.favRecipes.length; i++) {
            if (nextState.favRecipes[i] === action.recipeId) {
                nextState.favRecipes = nextState.favRecipes.filter(x => x !== nextState.favRecipes[i]);
            }
        }
        return {
            favRecipes: [...nextState.favRecipes]
        };
    }

    private onAddNewFavorite(action: AddRecipeToFavoriteListAction, state: StoreState): StoreState {
        localStorage.setItem(action.recipeId, action.recipeId);
        const nextState = {
            ...state
        };
        nextState.favRecipes.push(action.recipeId);
        return {
            favRecipes: [...nextState.favRecipes]
        };
    }

    public getFavRecipesIdsFromLocalStorage(): string[] {
        const favRecipes: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key != null && localStorage.getItem(key) != null) {
                //Using exclamation mark because localStorage.getItem(key) != null is checked in the if statement
                const item = localStorage.getItem(key)!;
                favRecipes.push(item);
            }
        }
        return favRecipes;
    }

    public getInitialState(): StoreState {
        return {
            favRecipes: this.getFavRecipesIdsFromLocalStorage()
        };
    }
}

export const FavRecipesReduceStore = new FavRecipesReduceStoreClass();

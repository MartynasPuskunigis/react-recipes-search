import { ReduceStore } from "simplr-flux";

import {
    RemoveRecipeFromFavoriteListAction,
    AddRecipeToFavoriteListAction
} from "../actions/recipes-actions";

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
        const nextState = {
            ...state
        };
        for (let i = 0; i < nextState.favRecipes.length; i++) {
            if (nextState.favRecipes[i] === action.recipeId) {
                nextState.favRecipes = nextState.favRecipes.filter(x => x !== nextState.favRecipes[i]);
            }
        }
        return {
            ...state,
            favRecipes: [...nextState.favRecipes]
        };
    }

    private onAddNewFavorite(action: AddRecipeToFavoriteListAction, state: StoreState): StoreState {
        const nextState = {
            ...state
        };
        nextState.favRecipes.push(action.recipeId);
        return {
            ...state,
            favRecipes: [...nextState.favRecipes]
        };
    }

    public getInitialState(): StoreState {
        return {
            favRecipes: []
        };
    }
}

export const FavRecipesReduceStore = new FavRecipesReduceStoreClass();

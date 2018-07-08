import { ReduceStore } from "simplr-flux";

import { DataFetchedAction, FetchDataAction } from "./recipes-actions";
import { Recipe } from "./contracts/Recipe";

interface StoreState {
    recipes: Recipe[];
    isLoading: boolean;
}

class RecipesReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(DataFetchedAction, this.onSearchBoxChanged.bind(this));
        this.registerAction(FetchDataAction, this.onRecipesLoading.bind(this));
    }

    private onSearchBoxChanged(action: DataFetchedAction, state: StoreState): StoreState {
        return {
          recipes: action.getRecipes,
          isLoading: false
        };
    }

    private onRecipesLoading(action: FetchDataAction, state: StoreState): StoreState {
        const nextState = {
            ...state,
            isLoading: true
        };
        return nextState;
    }

    public getInitialState(): StoreState {
        return {
            recipes: [],
            isLoading: false
        };
    }
}

export const RecipesReduceStore = new RecipesReduceStoreClass();

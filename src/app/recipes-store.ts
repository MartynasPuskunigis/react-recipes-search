import { ReduceStore, Abstractions } from "simplr-flux";

import {
    RecipesIdsFetchedAction,
    RecipesIdsLoadStartedAction,
    ReassignActiveRecipeAction
} from "./recipes-actions";

interface StoreState {
    recipes: string[];
    status: Abstractions.ItemStatus;
    activeRecipe: string;
    favoriteRecipes: string[];
}

class RecipesReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(RecipesIdsFetchedAction, this.onSearchBoxChanged.bind(this));
        this.registerAction(RecipesIdsLoadStartedAction, this.onRecipesLoading.bind(this));
        this.registerAction(ReassignActiveRecipeAction, this.onViewRecipeClick.bind(this));
    }

    private onSearchBoxChanged(action: RecipesIdsFetchedAction, state: StoreState): StoreState {
        return {
            ...state,
            recipes: action.getRecipes,
            status: Abstractions.ItemStatus.Loaded
        };
    }

    private onRecipesLoading(action: RecipesIdsLoadStartedAction, state: StoreState): StoreState {
        const nextState = {
            ...state,
            status: Abstractions.ItemStatus.Pending
        };
        return nextState;
    }

    private onViewRecipeClick(action: ReassignActiveRecipeAction, state: StoreState): StoreState {
        for (let i = 0; i < state.recipes.length; i++) {
            if (state.recipes[i] === action.newRecipeId) {
                return {
                    ...state,
                    activeRecipe: state.recipes[i]
                };
            }
        }
        return {
            ...state
        };
    }

    public getInitialState(): StoreState {
        return {
            recipes: [],
            status: Abstractions.ItemStatus.Init,
            activeRecipe: "",
            favoriteRecipes: []
        };
    }
}

export const RecipesReduceStore = new RecipesReduceStoreClass();

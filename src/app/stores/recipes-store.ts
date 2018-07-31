import { ReduceStore, Abstractions } from "simplr-flux";

import {
    RecipesIdsFetchedAction,
    RecipesIdsLoadStartedAction,
    ReassignActiveRecipeAction,
    InvalidateEntireCache,
    LoadMoreRecipesAction
} from "../actions/recipes-actions";

interface StoreState {
    recipes: string[];
    status: Abstractions.ItemStatus;
    activeRecipe: string;
    favoriteRecipes: string[];
    currentPage: number;
    searchKeyword: string;
    hasMoreRecipes: boolean;
}

class RecipesReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(RecipesIdsFetchedAction, this.onSearchBoxChanged.bind(this));
        this.registerAction(RecipesIdsLoadStartedAction, this.onRecipesLoading.bind(this));
        this.registerAction(ReassignActiveRecipeAction, this.onViewRecipeClick.bind(this));
        this.registerAction(InvalidateEntireCache, this.cleanUpStore.bind(this));
        this.registerAction(LoadMoreRecipesAction, this.onLoadMoreRecipes.bind(this));
    }

    private onSearchBoxChanged(action: RecipesIdsFetchedAction, state: StoreState): StoreState {
        return {
            ...state,
            recipes: action.getRecipes,
            status: Abstractions.ItemStatus.Loaded,
            currentPage: 1,
            hasMoreRecipes: true,
            searchKeyword: action.getSearchKeyword
        };
    }

    private onLoadMoreRecipes(action: LoadMoreRecipesAction, state: StoreState): StoreState {
        if (action.getRecipes.length === 0) {
            return {
                ...state,
                status: Abstractions.ItemStatus.Loaded,
                currentPage: state.currentPage + 1,
                hasMoreRecipes: false
            };
        }

        return {
            ...state,
            recipes: state.recipes.concat(action.getRecipes),
            status: Abstractions.ItemStatus.Loaded,
            currentPage: state.currentPage + 1
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
            favoriteRecipes: [],
            currentPage: 1,
            searchKeyword: "",
            hasMoreRecipes: true
        };
    }
}

export const RecipesReduceStore = new RecipesReduceStoreClass();

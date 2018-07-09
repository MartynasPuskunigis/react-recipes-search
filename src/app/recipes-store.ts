import { ReduceStore } from "simplr-flux";

import { DataFetchedAction, FetchDataAction, ReassignActiveRecipeAction } from "./recipes-actions";
import { Recipe } from "./contracts/Recipe";

interface StoreState {
    recipes: Recipe[];
    isLoading: boolean;
    activeRecipe: Recipe;
}

class RecipesReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(DataFetchedAction, this.onSearchBoxChanged.bind(this));
        this.registerAction(FetchDataAction, this.onRecipesLoading.bind(this));
        this.registerAction(ReassignActiveRecipeAction, this.onViewRecipeClick.bind(this));
    }

    private onSearchBoxChanged(action: DataFetchedAction, state: StoreState): StoreState {
        return {
            ...state,
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

    private onViewRecipeClick(action: ReassignActiveRecipeAction, state: StoreState): StoreState {
        for (let i = 0; i < state.recipes.length; i++) {
            if (state.recipes[i].recipe_id === action.newRecipeId) {
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
            isLoading: false,
            activeRecipe: {
                f2f_url: "",
                image_url: "",
                publisher: "",
                publisher_url: "",
                recipe_id: 0,
                social_rank: 0,
                source_url: "",
                title: ""
            }
        };
    }
}

export const RecipesReduceStore = new RecipesReduceStoreClass();

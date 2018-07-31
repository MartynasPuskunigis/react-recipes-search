import { Dispatcher } from "simplr-flux";

import {
    RecipesIdsFetchedAction,
    RecipesIdsLoadStartedAction,
    ReassignActiveRecipeAction,
    AddRecipeToFavoriteListAction,
    RemoveRecipeFromFavoriteListAction,
    InvalidateEntireCache,
    RecipeIdsLoadFailedAction,
    LoadMoreRecipesAction
} from "./recipes-actions";
import { Recipes } from "../contracts/Recipes";
import { API_KEY } from "../shared/apikey";

export namespace RecipesActionsCreators {
    export async function searchForRecipes(keyword: string): Promise<void> {
        Dispatcher.dispatch(new RecipesIdsLoadStartedAction());
        try {
            const recipeName = keyword;
            const apiCall = await fetch(
                `https://cors-anywhere.herokuapp.com/food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=1`
            );
            const response: Recipes = await apiCall.json();
            const dataIds = await response.recipes.map(x => x.recipe_id);
            Dispatcher.dispatch(new RecipesIdsFetchedAction(dataIds, keyword));
        } catch (error) {
            Dispatcher.dispatch(new RecipeIdsLoadFailedAction());
        }
    }

    export async function loadMoreRecipes(keyword: string, pageToLoad: number): Promise<void> {
        Dispatcher.dispatch(new RecipesIdsLoadStartedAction());
        try {
            const recipeName = keyword;
            const apiCall = await fetch(
                `https://cors-anywhere.herokuapp.com/food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=${pageToLoad}`
            );
            const response: Recipes = await apiCall.json();
            const dataIds = await response.recipes.map(x => x.recipe_id);
            Dispatcher.dispatch(new LoadMoreRecipesAction(dataIds));
        } catch (error) {
            Dispatcher.dispatch(new RecipeIdsLoadFailedAction());
        }
    }

    export function reassignNewActiveRecipe(id: string): void {
        Dispatcher.dispatch(new ReassignActiveRecipeAction(id));
    }

    export function addRecipeToFavourites(recipeId: string): void {
        localStorage.setItem(recipeId, recipeId);
        Dispatcher.dispatch(new AddRecipeToFavoriteListAction(recipeId));
    }

    export function removeRecipeFromFavourites(id: string): void {
        localStorage.removeItem(id);
        Dispatcher.dispatch(new RemoveRecipeFromFavoriteListAction(id));
    }

    export function invalidateEntireCache(): void {
        Dispatcher.dispatch(new InvalidateEntireCache());
    }
}

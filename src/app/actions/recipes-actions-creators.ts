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
    export function generateApiPath(searchType: string, apiKey: string, searchQuery?: string, page?: number, idToSearch?: string): string {
        const apiPathBase = "https://cors-anywhere.herokuapp.com/food2fork.com/api/";
        if (searchType === "search" && searchQuery != null && page != null && idToSearch == null) {
            if (searchQuery == null || searchQuery === "") {
                return `${apiPathBase}${searchType}?key=${apiKey}&page=${page}`;
            }
            return `${apiPathBase}${searchType}?key=${apiKey}&q=${searchQuery}&page=${page}`;
        } else {
            return `${apiPathBase}${searchType}?key=${apiKey}&rId=${idToSearch}`;
        }
    }

    export async function searchForRecipes(keyword?: string): Promise<void> {
        if (keyword == null) {
            keyword = "";
        }
        Dispatcher.dispatch(new RecipesIdsLoadStartedAction());
        try {
            const apiCall = await fetch(generateApiPath("search", API_KEY, keyword, 1, undefined));
            const response: Recipes = await apiCall.json();
            const dataIds = await response.recipes.map(x => x.recipe_id);
            Dispatcher.dispatch(new RecipesIdsFetchedAction(dataIds, keyword));
        } catch (error) {
            Dispatcher.dispatch(new RecipeIdsLoadFailedAction());
        }
    }

    export async function loadMoreRecipes(pageToLoad: number, keyword?: string): Promise<void> {
        if (keyword == null) {
            keyword = "";
        }
        Dispatcher.dispatch(new RecipesIdsLoadStartedAction());
        try {
            const apiCall = await fetch(generateApiPath("search", API_KEY, keyword, pageToLoad, undefined));
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

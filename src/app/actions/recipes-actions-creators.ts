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
import { Recipe } from "../contracts/Recipe";

const API_BASE_PATH = "https://cors-anywhere.herokuapp.com/food2fork.com/api/";

export namespace RecipesActionsCreators {
    export function generateApiPathForSearch(apiKey: string, searchQuery: string, page: number): string {
        const apiBasePathWithTypeAndKey = `${API_BASE_PATH}search?key=${apiKey}`;
        if (searchQuery == null || searchQuery === "") {
            return `${apiBasePathWithTypeAndKey}&page=${page}`;
        }
        return `${apiBasePathWithTypeAndKey}&q=${searchQuery}&page=${page}`;
    }

    export function generateApiPathForGet(apiKey: string, idToSearch: string): string {
        const apiBasePathWithTypeAndKey = `${API_BASE_PATH}get?key=${apiKey}`;
        return `${apiBasePathWithTypeAndKey}&rId=${idToSearch}`;
    }

    export async function searchForRecipes(keyword?: string): Promise<void> {
        if (keyword == null) {
            keyword = "";
        }
        Dispatcher.dispatch(new RecipesIdsLoadStartedAction());
        try {
            const apiCall = await fetch(`http://127.0.0.1:3000/recipe?q=${keyword}&page=1`);
            const response: Recipe[] = await apiCall.json();
            const dataIds = await response.map(x => x._id);
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
            const apiCall = await fetch(`http://127.0.0.1:3000/recipe?q=${keyword}&page=${pageToLoad}`);
            const response: Recipe[] = await apiCall.json();
            const dataIds = await response.map(x => x._id);
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

import { Dispatcher } from "simplr-flux";

import {
    RecipesIdsFetchedAction,
    RecipesIdsLoadStartedAction,
    ReassignActiveRecipeAction,
    AddRecipeToFavoriteListAction,
    RemoveRecipeFromFavoriteListAction,
    InvalidateEntireCache,
    RecipeIdsLoadFailedAction,
    LoadMoreRecipesAction,
    AddNewRecipeStartedAction,
    AddNewRecipeFinishedAction,
    DeleteRecipeStartedAction,
    DeleteRecipeFinishedAction,
    UpdateRecipeStartedAction,
    UpdateRecipeFinishedAction
} from "./recipes-actions";
import { Recipe } from "../contracts/Recipe";

export namespace RecipesActionsCreators {
    export async function searchForRecipes(keyword?: string): Promise<void> {
        if (keyword == null) {
            keyword = "";
        }
        Dispatcher.dispatch(new RecipesIdsLoadStartedAction());
        try {
            const apiCall = await fetch(`http://127.0.0.1:3000/recipe?q=${keyword}&page=1`);
            const response: Recipe[] = await apiCall.json();
            const dataIds: string[] = await response.map(x => {
                if (x._id != null) {
                    return x._id;
                }
                return "";
            });
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
            const dataIds: string[] = await response.map(x => {
                if (x._id != null) {
                    return x._id;
                }
                return "";
            });
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

    export function addNewRecipe(recipeToAdd: Recipe): void {
        Dispatcher.dispatch(new AddNewRecipeStartedAction());
        fetch("http://127.0.0.1:3000/recipe", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeToAdd)
        });
        Dispatcher.dispatch(new AddNewRecipeFinishedAction(recipeToAdd));
    }

    export function deleteRecipe(recipeId: string): void {
        Dispatcher.dispatch(new DeleteRecipeStartedAction());
        fetch(`http://127.0.0.1:3000/recipe/${recipeId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        Dispatcher.dispatch(new DeleteRecipeFinishedAction(recipeId));
    }

    export function updateRecipe(recipeToUpdate: Recipe): void {
        Dispatcher.dispatch(new UpdateRecipeStartedAction());
        fetch(`http://127.0.0.1:3000/recipe/${recipeToUpdate._id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeToUpdate)
        });
        Dispatcher.dispatch(new UpdateRecipeFinishedAction(recipeToUpdate));
    }
}

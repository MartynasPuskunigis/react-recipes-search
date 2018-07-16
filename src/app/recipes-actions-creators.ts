import { Dispatcher } from "simplr-flux";

import { RecipesIdsFetchedAction, RecipesIdsLoadStartedAction, ReassignActiveRecipeAction } from "./recipes-actions";
import { Recipes } from "./contracts/Recipes";
import { API_KEY } from "./index";

export namespace RecipesActionsCreators {
    export async function searchForRecipes(keyword: string): Promise<void> {
        Dispatcher.dispatch(new RecipesIdsLoadStartedAction());
        try {
            const recipeName = keyword;
            const apiCall = await fetch(
                `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
            );
            const response: Recipes = await apiCall.json();
            const dataIds = await response.recipes.map(x => x.recipe_id);
            Dispatcher.dispatch(new RecipesIdsFetchedAction(dataIds));
        } catch (error) {
            console.error("Failed to search for recipe", error);
        }
    }

    export function reassignNewActiveRecipe(id: string): void {
        Dispatcher.dispatch(new ReassignActiveRecipeAction(id));
    }
}
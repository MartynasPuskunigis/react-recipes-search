import { Dispatcher } from "simplr-flux";

import { DataFetchedAction, FetchDataAction } from "./recipes-actions";
import { Recipes } from "./contracts/Recipes";

const API_KEY = "fe84d20d640360b86c238664b6a333ff";

export namespace RecipesActionsCreators {
    export async function searchForRecipes(keyword: string): Promise<void> {
        Dispatcher.dispatch(new FetchDataAction);
        const recipeName = keyword;
        const apiCall = await fetch(
            `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
        );
        const data: Recipes = await apiCall.json();
        Dispatcher.dispatch(new DataFetchedAction(data.recipes));
    }
}

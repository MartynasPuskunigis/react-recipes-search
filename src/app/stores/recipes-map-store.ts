import { MapStore } from "simplr-flux";

import { Recipe } from "../contracts/Recipe";
import { API_KEY } from "../shared/apikey";
import { RecipesActionsCreators } from "../actions/recipes-actions-creators";

type RecipesDictionary = { [key: string]: Recipe };

class RecipesMapStoreClass extends MapStore<Recipe> {
    protected async requestData(ids: string[]): Promise<RecipesDictionary> {
        const promises: Array<Promise<void>> = [];
        const postsDictionary: RecipesDictionary = {};
        try {
            for (const id of ids) {
                const promise = fetch(RecipesActionsCreators.generateApiPathForGet(API_KEY, id))
                    .then(data => data.json())
                    .then((data: { recipe: Recipe }) => {
                        postsDictionary[id] = data.recipe;
                    });
                promises.push(promise);
            }
            await Promise.all(promises);
        } catch (error) {
            console.error(error);
        }

        return postsDictionary;
    }
}

export const RecipesMapStore = new RecipesMapStoreClass();

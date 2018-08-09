import { MapStore } from "simplr-flux";

import { Recipe } from "../contracts/Recipe";

type RecipesDictionary = { [key: string]: Recipe };

class RecipesMapStoreClass extends MapStore<Recipe> {
    protected async requestData(ids: string[]): Promise<RecipesDictionary> {
        const promises: Array<Promise<void>> = [];
        const postsDictionary: RecipesDictionary = {};
        try {
            for (const id of ids) {
                const promise = fetch(`http://127.0.0.1:3000/recipe/${id}`)
                    .then(data => data.json())
                    .then((data: Recipe) => {
                        postsDictionary[id] = data;
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

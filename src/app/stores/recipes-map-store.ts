import { MapStore } from "simplr-flux";

import { Recipe } from "../contracts/Recipe";
import { API_KEY } from "../shared/apikey";

type RecipesDictionary = { [key: string]: Recipe };

class RecipesMapStoreClass extends MapStore<Recipe> {
    protected async requestData(keys: string[]): Promise<RecipesDictionary> {
        const promises: Array<Promise<void>> = [];
        const postsDictionary: RecipesDictionary = {};
        try {
            for (const key of keys) {
                const promise = fetch(`https://cors-anywhere.herokuapp.com/food2fork.com/api/get?key=${API_KEY}&rId=${key}`)
                    .then(data => data.json())
                    .then((data: { recipe: Recipe }) => {
                        postsDictionary[key] = data.recipe;
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

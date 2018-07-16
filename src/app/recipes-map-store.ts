import { MapStore } from "simplr-flux";
import { Recipe } from "./contracts/Recipe";
import { API_KEY } from "./index";

type RecipesDictionary = { [key: string]: Recipe };

class RecipesMapStoreClass extends MapStore<Recipe> {
    protected async requestData(keys: string[]): Promise<RecipesDictionary> {
        let promises: Promise<void>[] = [];
        let postsDictionary: RecipesDictionary = {};
        try {
        for (let key of keys) {
            const promise = fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/get?key=${API_KEY}&rId=${key}`)
                .then(data => data.json())
                .then((data: { recipe: Recipe }) => {
                    postsDictionary[key] = data.recipe;
                });
            promises.push(promise);
        }
        await Promise.all(promises);
    } catch(error) {
        console.log(error);
    }

        return postsDictionary;
    }
}

export const RecipesMapStore = new RecipesMapStoreClass();

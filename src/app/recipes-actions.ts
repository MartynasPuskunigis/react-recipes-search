import { Recipe } from "./contracts/Recipe";

export class DataFetchedAction {
    constructor(private recipes: Recipe[]) {}

    public get getRecipes(): Recipe[] {
        return this.recipes;
    }
}

export class FetchDataAction {}

export class ReassignActiveRecipeAction {
    constructor(private id: number) {}

    public get newRecipeId(): number {
        return this.id;
    }
}

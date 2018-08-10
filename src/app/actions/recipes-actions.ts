import { Recipe } from "../contracts/Recipe";

export class RecipesIdsFetchedAction {
    constructor(private recipes: string[], private searchKeyword: string) {}

    public get getSearchKeyword(): string {
        return this.searchKeyword;
    }

    public get getRecipes(): string[] {
        return this.recipes;
    }
}

export class LoadMoreRecipesAction {
    constructor(private recipes: string[]) {}

    public get getRecipes(): string[] {
        return this.recipes;
    }
}

export class RecipesIdsLoadStartedAction {}

export class RecipeIdsLoadFailedAction {}

export class ReassignActiveRecipeAction {
    constructor(private id: string) {}

    public get newRecipeId(): string {
        return this.id;
    }
}

export class AddRecipeToFavoriteListAction {
    constructor(private id: string) {}

    public get recipeId(): string {
        return this.id;
    }
}

export class RemoveRecipeFromFavoriteListAction {
    constructor(private id: string) {}

    public get recipeId(): string {
        return this.id;
    }
}

export class InvalidateEntireCache {}

export class AddNewRecipeStartedAction {}

export class AddNewRecipeFinishedAction {
    constructor(private recipe: Recipe) {}

    public get getRecipe(): Recipe {
        return this.recipe;
    }
}

export class DeleteRecipeStartedAction {}

export class DeleteRecipeFinishedAction {
    constructor(private id: string) {}

    public get recipeId(): string {
        return this.id;
    }
}

export class UpdateRecipeStartedAction {}

export class UpdateRecipeFinishedAction {
    constructor(private recipe: Recipe) {}

    public get getRecipe(): Recipe {
        return this.recipe;
    }
}

import * as React from "react";
import { Container } from "flux/utils";
import { Abstractions } from "simplr-flux";

import { RecipesReduceStore } from "../../stores/recipes-store";
import { RecipesMapStore } from "../../stores/recipes-map-store";
import { RecipesItemView } from "../../components/recipe/recipes-item-view";
import { Recipe } from "../../contracts/Recipe";

interface Props {
    recipeId: string;
}

interface State {
    recipe: Abstractions.Item<Recipe>;
    favRecipes: string[];
}

class FavRecipesItemContainerClass extends React.Component<Props, State> {
    public static getStores(): Container.StoresList {
        return [RecipesMapStore, RecipesReduceStore];
    }

    public static calculateState(state: State, props: Props): State {
        return {
            recipe: RecipesMapStore.get(props.recipeId),
            favRecipes: RecipesReduceStore.getState().favoriteRecipes
        };
    }

    private onRetryClick(event: React.MouseEvent<HTMLButtonElement>, recipeId: string): void {
        RecipesMapStore.InvalidateCache(recipeId);
    }

    public render(): JSX.Element {
        const isFavorite = this.state.favRecipes.indexOf(this.props.recipeId) > -1;
        switch (this.state.recipe.Status) {
            case Abstractions.ItemStatus.Init:
            case Abstractions.ItemStatus.Pending: {
                return <div>Loading...</div>;
            }
            case Abstractions.ItemStatus.Loaded: {
                if (this.state.recipe.Value) {
                    return <RecipesItemView recipe={this.state.recipe.Value} isFavorite={!isFavorite} />;
                }
            }
            case Abstractions.ItemStatus.NoData: {
                return <div>No data.</div>;
            }
            case Abstractions.ItemStatus.Failed: {
                return (
                    <div>
                        Failed to load...
                        <span>
                            <button onClick={event => this.onRetryClick(event, this.props.recipeId)}>Retry...</button>
                        </span>
                    </div>
                );
            }
        }
    }
}
export const FavRecipesItemContainer = Container.create(FavRecipesItemContainerClass, { withProps: true });

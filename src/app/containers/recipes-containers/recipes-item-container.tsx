import * as React from "react";
import { Container } from "flux/utils";
import { Abstractions } from "simplr-flux";

import { RecipesMapStore } from "../../stores/recipes-map-store";
import { FavRecipesReduceStore } from "../../stores/fav-recipes-store";
import { RecipesItemView } from "../../components/recipe/recipes-item-view";
import { Spinner } from "../../spinner/spinner";
import { Recipe } from "../../contracts/Recipe";

interface Props {
    recipeId: string;
}

interface State {
    recipe: Abstractions.Item<Recipe>;
    favRecipes: string[];
}

class RecipesItemContainerClass extends React.Component<Props, State> {
    public static getStores(): Container.StoresList {
        return [RecipesMapStore, FavRecipesReduceStore];
    }

    public static calculateState(state: State, props: Props): State {
        return {
            recipe: RecipesMapStore.get(props.recipeId),
            favRecipes: FavRecipesReduceStore.getState().favRecipes
        };
    }

    public render(): JSX.Element {
        const isFavorite = this.state.favRecipes.indexOf(this.props.recipeId) > -1;
        switch (this.state.recipe.Status) {
            case Abstractions.ItemStatus.Loaded: {
                if (this.state.recipe.Value) {
                    return <RecipesItemView recipe={this.state.recipe.Value} isFavorite={isFavorite}/>;
                }
            }
            case Abstractions.ItemStatus.Init:
            case Abstractions.ItemStatus.Pending: {
                return <Spinner/>;
            }
            case Abstractions.ItemStatus.NoData: {
                return <div>No data.</div>;
            }
            case Abstractions.ItemStatus.Failed: {
                return (
                    <div>
                        Failed to load... <span><button>Retry...</button></span>
                    </div>
                );
            }
        }
    }
}
export const RecipesItemContainer = Container.create(RecipesItemContainerClass, { withProps: true });

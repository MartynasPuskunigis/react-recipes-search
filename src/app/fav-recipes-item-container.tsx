import * as React from "react";
import { Container } from "flux/utils";
import { Abstractions } from "simplr-flux";

import { Recipe } from "./contracts/Recipe";
import { FavRecipesItemView } from "./components/fav-recipe-item-view";
import { FavRecipesReduceStore } from "./fav-recipes-store";
import { RecipesMapStore } from "./recipes-map-store";
import { Spinner } from "./spinner/spinner";

interface Props {
    recipeId: string;
}

interface State {
    favRecipes: string[];
    recipeToDisplay: Abstractions.Item<Recipe>;
}

class FavRecipesItemContainerClass extends React.Component<Props, State> {
    public static getStores(): Container.StoresList {
        return [FavRecipesReduceStore, RecipesMapStore];
    }

    public static calculateState(state: State, props: Props): State {
        const { favRecipes } = FavRecipesReduceStore.getState();
        return {
            recipeToDisplay: RecipesMapStore.get(props.recipeId),
            favRecipes: favRecipes
        };
    }

    public render(): JSX.Element {
        switch (this.state.recipeToDisplay.Status) {
            case Abstractions.ItemStatus.Loaded: {
                if (this.state.recipeToDisplay.Value) {
                    return <FavRecipesItemView recipeToDisplay={this.state.recipeToDisplay.Value} />;
                }
            }
            case Abstractions.ItemStatus.Init:
            case Abstractions.ItemStatus.Pending: {
                return <Spinner />;
            }
            case Abstractions.ItemStatus.NoData: {
                return <div>No data.</div>;
            }
            case Abstractions.ItemStatus.Failed: {
                return (
                    <div>
                        Failed to load...{" "}
                        <span>
                            <button>Retry...</button>
                        </span>
                    </div>
                );
            }

        }
    }
}
export const FavRecipesItemContainer = Container.create(FavRecipesItemContainerClass, { withProps: true });

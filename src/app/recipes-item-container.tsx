import * as React from "react";
import { Container } from "flux/utils";
import { Abstractions } from "simplr-flux";

import { RecipesMapStore } from "./recipes-map-store";
import { RecipesItemView } from "./components/recipes-item-view";
//import { LoadingView } from "./components/loading-view";
import { Recipe } from "./contracts/Recipe";

interface Props {
    recipeId: string;
}

interface State {
    recipe: Abstractions.Item<Recipe>;
}

class RecipesItemContainerClass extends React.Component<Props, State> {
    public static getStores(): Container.StoresList {
        return [RecipesMapStore];
    }

    public static calculateState(state: State, props: Props): State {
        return {
            recipe: RecipesMapStore.get(props.recipeId)
        };
    }

    public render(): JSX.Element {
        switch (this.state.recipe.Status) {
            case Abstractions.ItemStatus.Init:
            case Abstractions.ItemStatus.Pending: {
                return <div>Loading...</div>;
            }
            case Abstractions.ItemStatus.Loaded: {
                if (this.state.recipe.Value) {
                    return <RecipesItemView recipe={this.state.recipe.Value} />;
                }
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

import * as React from "react";
import { Container } from "flux/utils";
import { Abstractions } from "simplr-flux";

//import { RecipesMapStore } from "./recipes-map-store";
import { Recipe } from "./contracts/Recipe";
import { FavRecipesItemView } from "./components/fav-recipe-item-view";
import { RecipesReduceStore } from "./recipes-store";

interface Props {
    recipe: Recipe;
}

interface State {
    favRecipes: string[];
}

class FavRecipesItemContainerClass extends React.Component<Props, State> {
    public static getStores(): Container.StoresList {
        return [RecipesReduceStore];
    }

    public static calculateState(state: State, props: Props): State {
        return {
            ...state,
            favRecipes: RecipesReduceStore.getState().favoriteRecipes
        };
    }

    public render(): JSX.Element {
        //const isFavorite = this.state.favRecipes.indexOf(this.props.recipe) > -1;
        //switch (this.state.recipe.Status) {
        // case Abstractions.ItemStatus.Init:
        // case Abstractions.ItemStatus.Pending: {
        //     return <div>Loading...</div>;
        // }
        // case Abstractions.ItemStatus.Loaded: {
        //if (this.props.recipe) {
        return <FavRecipesItemView recipe={this.props.recipe} />;
        //}
        // }
        // case Abstractions.ItemStatus.NoData: {
        //     return <div>No data.</div>;
        // }
        // case Abstractions.ItemStatus.Failed: {
        //     return (
        //         <div>
        //             Failed to load...{" "}
        //             <span>
        //                 <button>Retry...</button>
        //             </span>
        //         </div>
        //     );
        // }
        //}
    }
}
export const FavRecipesItemContainer = Container.create(FavRecipesItemContainerClass, { withProps: true });

import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Container } from "flux/utils";
import { Abstractions } from "simplr-flux";

import { RecipesMapStore } from "./recipes-map-store";
import { ActiveRecipeView } from "./components/active-recipe-view";
import { Spinner } from "./spinner/spinner";
import { Recipe } from "./contracts/Recipe";

interface Params {
    id: string;
}

interface Props extends RouteComponentProps<Params> {}

interface State {
    activeRecipe: Abstractions.Item<Recipe>;
}

class ActiveRecipeContainerClass extends React.Component<Props, State> {
    public static getStores(): Container.StoresList {
        return [RecipesMapStore];
    }

    public static calculateState(state: State, props: Props): State {
        return {
            activeRecipe: RecipesMapStore.get(props.match.params.id)
        };
    }

    public render(): JSX.Element | JSX.Element[] {
        switch (this.state.activeRecipe.Status) {
            case Abstractions.ItemStatus.Init:
            case Abstractions.ItemStatus.Pending: {
                return <Spinner />;
            }
            case Abstractions.ItemStatus.Loaded: {
                if (this.state.activeRecipe.Value) {
                    return <ActiveRecipeView recipeToDisplay={this.state.activeRecipe.Value} />;
                }
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

export const ActiveRecipeContainer = Container.create(ActiveRecipeContainerClass, { withProps: true });

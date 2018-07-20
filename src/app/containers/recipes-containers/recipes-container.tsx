import * as React from "react";
import { Container } from "flux/utils";
import { Abstractions } from "simplr-flux";

import { RecipesItemContainer } from "./recipes-item-container";
import { RecipesActionsCreators } from "../../actions/recipes-actions-creators";
import { RecipesMapStore } from "../../stores/recipes-map-store";
import { RecipesReduceStore } from "../../stores/recipes-store";
import { Spinner } from "../../spinner/spinner";

import "./recipes-container.css";

interface State {
    recipes: string[];
    status: Abstractions.ItemStatus;
}

class RecipesContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [RecipesReduceStore];
    }

    public static calculateState(state: State): State {
        const { recipes, status } = RecipesReduceStore.getState();

        return {
            status: status,
            recipes: recipes
        };
    }

    private onRetryClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        RecipesMapStore.InvalidateCacheMultiple(this.state.recipes);
        RecipesActionsCreators.invalidateEntireCache();
    };

    public render(): JSX.Element | JSX.Element[] {
        switch (this.state.status) {
            case Abstractions.ItemStatus.Init: {
                return <div>Search not initialized</div>;
            }
            case Abstractions.ItemStatus.Pending: {
                return <Spinner />;
            }
            case Abstractions.ItemStatus.Loaded: {
                return (
                    <div className="recipe-list">
                        {this.state.recipes.map((recipeId, index) => (
                            <RecipesItemContainer key={`recipe-item-${recipeId}-${index}`} recipeId={recipeId} />
                        ))}
                    </div>
                );
            }
            case Abstractions.ItemStatus.NoData: {
                return <div>No results found...</div>;
            }
            case Abstractions.ItemStatus.Failed: {
                return (
                    <div>
                        Failed to load...
                        <span>
                            <button onClick={this.onRetryClick}>Retry...</button>
                        </span>
                    </div>
                );
            }
        }
    }
}
export const RecipesContainer = Container.create(RecipesContainerClass);

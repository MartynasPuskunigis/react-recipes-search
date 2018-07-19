import * as React from "react";
import { Container } from "flux/utils";

import { RecipesReduceStore } from "../../stores/recipes-store";
import { Abstractions } from "simplr-flux";
import { RecipesItemContainer } from "./recipes-item-container";
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

    public render(): JSX.Element | JSX.Element[] {
        const recipeList = this.state.recipes.map((recipeId, index) => (
            <RecipesItemContainer key={`recipe-item-${recipeId}-${index}`} recipeId={recipeId} />
        ));
        switch (this.state.status) {
            case Abstractions.ItemStatus.Init: {
                return <div>Search not initialized</div>;
            }
            case Abstractions.ItemStatus.Pending: {
                return <Spinner />;
            }
            case Abstractions.ItemStatus.Loaded: {
                return <div className="recipe-list">{recipeList}</div>;
            }
            case (Abstractions.ItemStatus.NoData): {
                return <div>No results found...</div>;
            }
            case Abstractions.ItemStatus.Failed: {
                return (
                    <div>
                        Failed to load...
                        <span>
                            <button>Retry...</button>
                        </span>
                    </div>
                );
            }
        }
    }
}
export const RecipesContainer = Container.create(RecipesContainerClass);

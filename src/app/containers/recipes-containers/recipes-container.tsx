import * as React from "react";
import { Container } from "flux/utils";
import { Abstractions } from "simplr-flux";

import { RecipesItemContainer } from "./recipes-item-container";
import { RecipesActionsCreators } from "../../actions/recipes-actions-creators";
import { RecipesReduceStore } from "../../stores/recipes-store";
import { RecipesMapStore } from "../../stores/recipes-map-store";
import { NoDataView } from "../../components/nodata/no-data-view";
import { Spinner } from "../../spinner/spinner";

import "./recipes-container.css";

const Y_POSITION_AT_BOTTOM_OF_PAGE = -635;

interface State {
    recipesIds: string[];
    status: Abstractions.ItemStatus;
    searchKeyword: string;
    currentPage: number;
    moreRecipes: boolean;
}

class RecipesContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [RecipesReduceStore];
    }

    public static calculateState(state: State): State {
        const { recipes, status, searchKeyword, currentPage, hasMoreRecipes } = RecipesReduceStore.getState();
        return {
            status: status,
            recipesIds: recipes,
            searchKeyword: searchKeyword,
            currentPage: currentPage,
            moreRecipes: hasMoreRecipes
        };
    }

    public componentDidMount(): void {
        window.addEventListener(
            "scroll",
            this.onScrollHandler,
            false
        );
    }

    public componentWillUnmount(): void {
        window.removeEventListener(
            "scroll",
            this.onScrollHandler,
            false
        );
    }

    protected onScrollHandler = (event: UIEvent) => {
        if (
            window.pageYOffset - document.body.scrollHeight === Y_POSITION_AT_BOTTOM_OF_PAGE &&
            this.state.status === Abstractions.ItemStatus.Loaded &&
            this.state.moreRecipes
        ) {
            RecipesActionsCreators.loadMoreRecipes(this.state.currentPage + 1, this.state.searchKeyword);
        }
    }

    private onRetryClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        RecipesMapStore.InvalidateCacheMultiple(this.state.recipesIds);
        RecipesActionsCreators.invalidateEntireCache();
    };

    public render(): JSX.Element | JSX.Element[] {
        switch (this.state.status) {
            case Abstractions.ItemStatus.Init: {
                return <div />;
            }
            case Abstractions.ItemStatus.Pending: {
                return (
                    <div className="recipe-list">
                        {this.state.recipesIds.map(recipeId => (
                            <RecipesItemContainer key={`recipe-item-${recipeId}`} recipeId={recipeId} />
                        ))}
                        <Spinner />
                    </div>
                );
            }
            case Abstractions.ItemStatus.Loaded: {
                return (
                    <div className="recipe-list">
                        {this.state.recipesIds.map(recipeId => (
                            <RecipesItemContainer key={`recipe-item-${recipeId}`} recipeId={recipeId} />
                        ))}
                    </div>
                );
            }
            case Abstractions.ItemStatus.NoData: {
                return <NoDataView />;
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

import * as React from "react";

import { Recipe } from "./../contracts/Recipe";

export class LoadingView extends React.Component {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <div>
                Loading..........
            </div>
        );
    }
}

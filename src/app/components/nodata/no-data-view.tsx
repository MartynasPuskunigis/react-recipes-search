import * as React from "react";

import "./no-data-view.css";

export class NoDataView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="no-data-view">
                <div className="wrapper">
                    <div className="fas fa-frown no-data-img" />
                    <div className="no-data-header">We're sorry!</div>
                    <div className="no-data-text">We haven't found any recipes with that name, please try another.</div>
                </div>
            </div>
        );
    }
}

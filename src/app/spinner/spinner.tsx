import * as React from "react";

import "./spinner.css";

export class Spinner extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="lds-dual-ring"></div>
        );
    }
}

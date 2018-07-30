import * as React from "react";

import "./text-spinner.css";

export class TextSpinner extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="lds-ellipsis">
                <div />
                <div />
                <div />
                <div />
            </div>
        );
    }
}

import * as React from "react";

import "./footer-view.css";

export class FooterView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="footer-view">
                <div className="wrapper">
                    <div className="footer-text">© 2018</div>
                </div>
            </div>
        );
    }
}

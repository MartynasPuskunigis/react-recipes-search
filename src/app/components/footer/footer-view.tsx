import * as React from "react";

import "./footer-view.css";

export class FooterView extends React.Component {
    public render(): JSX.Element {
        const userDate = new Date();
        return (
            <div className="footer-view">
                <div className="wrapper">
                    <div className="footer-text">© {userDate.getFullYear()}</div>
                </div>
            </div>
        );
    }
}

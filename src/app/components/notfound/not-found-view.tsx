import * as React from "react";
import { Link } from "react-router-dom";

import "./not-found-view.css";

export class NotFoundView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="not-found-view">
                <div className="wrapper">
                    <div className="fas fa-car-crash not-found-img" />
                    <div className="status-code">404</div>
                    <div className="text-header">Page not found</div>
                    <div className="text">You went where nobody should have went, please go back!</div>
                    <Link className="home-button" to="/">
                        Back home
                    </Link>
                </div>
            </div>
        );
    }
}

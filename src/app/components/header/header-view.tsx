import * as React from "react";
import { Link } from "react-router-dom";

import "./header-view.css";

export class HeaderView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="header-view">
                <div className="navigation">
                    <div className="wrapper">
                        <Link className="header-button" to="/">
                            Find recipes
                        </Link>
                        <Link className="header-button" to="/favorites">
                            My favorites
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

import * as React from "react";
import { Link } from "react-router-dom";

import "./header-view.css";

export class HeaderView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="header-view">
                <div className="wrapper">
                    <div className="navigation">
                        <Link className="header-button" to="/">
                            Find recipes
                        </Link>
                        <Link className="header-button" to="/favorites">
                            My favorites
                        </Link>
                        <Link className="header-button" to="/add-my-recipe">
                            Add my recipe
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

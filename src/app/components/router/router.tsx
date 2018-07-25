import * as React from "react";
import { Router } from "react-router-dom";

import { AppHistory } from "./app-history";
import { ContentLayoutView } from "./content-layout";
import { HeaderView } from "../header/header-view";
import { FooterView } from "../footer/footer-view";

export class AppRouter extends React.Component {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <Router history={AppHistory}>
                <div className="page-layout">
                    <HeaderView />
                    <ContentLayoutView />
                    <FooterView />
                </div>
            </Router>
        );
    }
}

import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import { ContentLayoutView } from "./content-layout";
import { HeaderView } from "../header/header-view";
import { FooterView } from "../footer/footer-view";

import "./router.css";

export class Router extends React.Component {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <BrowserRouter>
                <div className="page-layout">
                    <HeaderView />
                    <ContentLayoutView />
                    <FooterView />
                </div>
            </BrowserRouter>
        );
    }
}

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router } from "./components/router";

import "./styles/main.css";
import "./styles/index.css";

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <Router />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"));

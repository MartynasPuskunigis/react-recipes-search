import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router } from "./components/router";
import "./styles/main.css";
import "./styles/index.css";

export const API_KEY = "fe84d20d640360b86c238664b6a333ff";

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

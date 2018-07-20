import * as React from "react";
import * as ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import { Router } from "./components/router/router";

import "./styles/main.css";
import "./styles/index.css";

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <ToastContainer />
                <Router />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"));

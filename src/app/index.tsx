import * as React from "react";
import * as ReactDOM from "react-dom";

import { SearchView } from "./components/search-view";
import { RecipesContainer } from "./recipes-container";
import "./styles/main.css";
import "./styles/index.css";

class App extends React.Component {
  public render(): JSX.Element {
    return <div className="App">
      <SearchView/>
      <RecipesContainer/>
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app-root"));

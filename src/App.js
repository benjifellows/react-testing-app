import React, { Fragment } from "react";

import "./App.css";
import Toggle from "./ToggleRenderPropsChildren.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <h1>Show Me</h1>}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          )}
        </Toggle>

        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              {on && <h1 on={on}>Show Me</h1>}
              <button onClick={toggle}>Show / Hide</button>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}
export default App;

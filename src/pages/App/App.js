import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../Homepage";

const App = (props) => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import DivisionsPage from "./pages/divisions/divisions";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/divisions" component={DivisionsPage} />
        <Route path="*" component={() => <Redirect to="/divisions" />} />
      </Switch>
    </Router>
  );
};

export default App;

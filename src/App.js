import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home";
import EntriesPage from "./pages/entries/entries";
import DivisionsPage from "./pages/divisions/divisions";
import NotFoundPage from "./pages/not-found/not-found";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/entries" component={EntriesPage} />
        <Route path="/divisions" component={DivisionsPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;

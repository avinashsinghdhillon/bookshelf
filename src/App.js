import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchbooks from "./pages/Searchbooks";
import Savedbooks from "./pages/Savedbooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/searchbooks" component={Searchbooks} />
          <Route exact path="/savedbooks" component={Savedbooks} />
          <Route exact path="/" component={Searchbooks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

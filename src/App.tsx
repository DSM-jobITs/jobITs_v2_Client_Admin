import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FirstRecruit, SecondRecruit, ThirdRecruit, FourthRecruit, EmployRequest } from "./components/index";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/recruit/1" render={() => <FirstRecruit />} />
          <Route exact path="/recruit/2" render={() => <SecondRecruit />} />
          <Route exact path="/recruit/3" render={() => <ThirdRecruit />} />
          <Route exact path="/recruit/4" render={() => <FourthRecruit />} />
          <Route exact path="/employ" render={() => <EmployRequest />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

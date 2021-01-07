import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FirstRecruit, SecondRecruit, ThirdRecruit, FourthRecruit, EmployRequest, Login } from "./components/index";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/first-recruit" render={() => <FirstRecruit />} />
          <Route exact path="/second-recruit" render={() => <SecondRecruit />} />
          <Route exact path="/third-recruit" render={() => <ThirdRecruit />} />
          <Route exact path="/fourth-recruit" render={() => <FourthRecruit />} />
          <Route exact path="/employ" render={() => <EmployRequest />} />
          <Route exact path="/" render={() => <Login />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

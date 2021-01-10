import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FirstRecruit, SecondRecruit, ThirdRecruit, FourthRecruit, EmployRequest, Login, DetailEmploy, TemporarySave } from "./components/index";

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
          <Route exact path="/employ/:id" render={() => <DetailEmploy />} />
          <Route exact path="/" render={() => <Login />} />
          <Route exact path="/save" render={() => <TemporarySave />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

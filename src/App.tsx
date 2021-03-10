import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecruitNotice, EmployRequest, Login, DetailEmploy, TemporarySave } from "./containers/index";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/recruit" render={() => <RecruitNotice />} />
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

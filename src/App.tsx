import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { RecruitNotice, EmployRequest, Login, DetailEmploy, TemporarySave, UpdateRecruit } from "./containers/index";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route exact path="/recruit">
            {!localStorage.getItem("accessToken") ? <Redirect to="/" /> : <RecruitNotice />}
          </Route>
          <Route exact path="/employ">
            {!localStorage.getItem("accessToken") ? <Redirect to="/" /> : <EmployRequest />}
          </Route>
          <Route exact path="/employ/:id">
            {!localStorage.getItem("accessToken") ? <Redirect to="/" /> : <DetailEmploy />}
          </Route>
          <Route exact path="/save" render={() => <TemporarySave />} />
          <Route exact path="/edit/:id">
            {!localStorage.getItem("accessToken") ? <Redirect to="/" /> : <UpdateRecruit />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecruitNotice } from "./components/index";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/recruit/:id" render={() => <RecruitNotice />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

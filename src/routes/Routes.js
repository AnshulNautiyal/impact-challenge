import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home.jsx";
import CandidateDetails from "../components/CandidateDetails.jsx";
import CandidateStatus from "../components/CandidateStatus.jsx";
import ErrorPage from "../components/ErrorPage.jsx";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/candidate/:id" component={CandidateDetails} />
        <Route exact path="/shortlisted" component={CandidateStatus} />
        <Route exact path="/rejected" component={CandidateStatus} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

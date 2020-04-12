import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./../components/NotFoundPage";
import Header from "./../components/Header";
import Temperature from "./../components/Temperature";
import Pressure from "./../components/Pressure";
import Team from "./../components/Team";
import DashboardPage from "./../components/DashboardPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true}/>
        <Route path="/temperature" component={Temperature} />
        <Route path="/pressure" component={Pressure} />
        <Route path="/team" component={Team} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

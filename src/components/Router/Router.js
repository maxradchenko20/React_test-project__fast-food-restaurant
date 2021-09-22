import React from 'react';
import Landing from "../Landing/Landing";
import App from "../App/App";
import NotFound from "../NotFound/NotFound";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/restaurant:restaurantId" component={App}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router
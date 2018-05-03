import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./pages/Overview/index";
import Login from "./pages/Login/login";
import Content from "./pages/Content/content";
import List from "./pages/List/list";

export default({childProps}) => 
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/type/overview" component={Content}/>
    <Route path="/action/:type/" component={List}/>
  </Switch>
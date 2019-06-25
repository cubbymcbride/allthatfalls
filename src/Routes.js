import React from "react";
import { Switch, Route } from "react-router-dom";
import Band from './components/Band/band'
import Gear from './components/Gear/gear'
import Home from './components/Home/home'
import Music from './components/Music/music'
import Store from './components/Store/store'
import Login from './components/Login/login'

export default (
    <Switch>
    <Route exact path="/band" component={Band} />
    <Route exact path="/gear" component={Gear} />
    <Route exact path="/" component={Home} />
    <Route exact path="/music" component={Music} />
    <Route exact path="/store" component={Store} />
    <Route exact path="/login" component={Login} />
    </Switch>
)
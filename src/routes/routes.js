import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Landing from '../components/Landing/Landing';
import Dashboard from '../components/Dashboard/Dashboard'
import BusienssReg from '../components/BusinessReg/BusinessReg'


export default(
  <Switch>
    <Route exact path='/' component={Landing}></Route>
    <Route path='/dashboard' component={Dashboard}></Route>
    <Route path='/businessReg' component={BusienssReg}></Route>
  </Switch>
)




import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../components/Landing/Landing";
import BusinessDash from "../components/BusinessDash/BusinessDash";
import BusienssReg from "../components/BusinessReg/BusinessReg";
import Drink from "../components/Drink/Drink";
import Map from "../components/Map/Map";
import userReg from "../components/UserReg/UserReg";
import PickDrinks from "../components/AddCreator/PickDrinks/PickDrinks";
import NameAd from "../components/AddCreator/NameAd/NameAd";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/businessDash" component={BusinessDash} />
    <Route path="/create-ad/drinkPicker" component={PickDrinks} />
    <Route path="/businessReg" component={BusienssReg} />
    <Route path="/drink/:id" component={Drink} />
    <Route path="/userReg" component={userReg} />
    <Route path="/map" component={Map} />
    <Route path="/create-ad/name" component={NameAd} />
  </Switch>
);

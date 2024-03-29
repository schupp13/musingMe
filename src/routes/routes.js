import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../components/Landing/Landing";
import BusinessDash from "../components/BusinessDash/BusinessDash";
import BusinessReg from "../components/BusinessReg/BusinessReg";
import Drink from "../components/Drink/Drink";
import Map from "../components/Map/Map";
import userReg from "../components/UserReg/UserReg";
import PickDrinks from "../components/AddCreator/PickDrinks/PickDrinks";
import NameAd from "../components/AddCreator/NameAd/NameAd";
import ConfirmAd from "../components/AddCreator/ConfirmAd/ConfirmAd";
import UserDash from "../components/UserDash/UserDash";
import EditProfile from "../components/EditProfile/EditProfile";
import AdPage from "../components/AdPage/AdPage";
import Login from "../components/Login/Login";

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/businessDash" component={BusinessDash} />
    <Route path="/create-ad/drinkPicker" component={PickDrinks} />
    <Route path="/businessReg" component={BusinessReg} />
    <Route path="/drink/:id" component={Drink} />
    <Route path="/userReg" component={userReg} />
    <Route path="/map" component={Map} />
    <Route path="/create-ad/name" component={NameAd} />
    <Route path="/create-ad/confirm" component={ConfirmAd} />
    <Route path="/userDash" component={UserDash} />
    <Route path="/editProfile" component={EditProfile} />
    <Route path="/adPage/:id" component={AdPage} />
    {/* <Route path="/login" component={Login} />  login is my new landing page*/}
  </Switch>
);

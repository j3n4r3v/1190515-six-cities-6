import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";

import browserHistory from "../../browser-history";

import FavoritesScreen from "../favorites-screen/favorites-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MainScreen from "../main-screen/main-sсreen";
import PropertyScreen from "../property-screen/property-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";

import PrivateRoute from "../private-route/private-route";

import {AppRoute} from "../../const";

const App = () => {

  return <React.Fragment>
    <BrowserRouter history={browserHistory}>
      <Switch>

        <Route exact path={`${AppRoute.MAIN}`}>
          <MainScreen/>
        </Route>

        <Route exact path={`${AppRoute.LOGIN}`}>
          <SignInScreen/>
        </Route>

        <PrivateRoute render={() => <FavoritesScreen />} exact path={`${AppRoute.FAVORITES}`}/>

        <Route exact path={`${AppRoute.OFFER}/:id`}>
          <PropertyScreen/>
        </Route>


        <Route exact path={`${AppRoute.NOT_FOUND}`}>
          <NotFoundScreen />
        </Route>

      </Switch>
    </BrowserRouter>
  </React.Fragment>;
};

export default App;

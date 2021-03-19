import React from "react";
// import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import FavoritesScreen from "../favorites-screen/favorites-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MainScreen from "../main-screen/main-sсreen";
import PropertyScreen from "../property-screen/property-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";

import {PrivateRoute} from "../private-route/private-route";
// import {offerPropTypes} from "../../propetypes";

const App = () => {

  return <React.Fragment>
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <MainScreen/>
        </Route>

        <Route exact path="/login">
          <SignInScreen/>
        </Route>

        <PrivateRoute exact
          path="/favorites">
          render={() => <FavoritesScreen />}
        </PrivateRoute>

        <Route exact path="/offer/:id">
          <PropertyScreen/>
        </Route>

        <Route>
          <NotFoundScreen/>
        </Route>

      </Switch>
    </BrowserRouter>
  </React.Fragment>;
};

// App.propTypes = {
//   offers: PropTypes.arrayOf(offerPropTypes),
//   activeCity: PropTypes.string
// };

export default App;

import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import FavoritesScreen from "../favorites-screen/favorites-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MainScreen from "../main-screen/main-sсreen";
import PropertyScreen from "../property-screen/property-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";

import {CITIES} from "../../const";
import {offerPropTypes} from "../../propetypes";

const ACTIVE_CITY = CITIES[3];

const App = (props) => {
  const {offers} = props;

  const filterCityOffers = offers.filter((offer) => {
    return offer.city.name === ACTIVE_CITY;
  });

  return <React.Fragment>
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <MainScreen offers={filterCityOffers} activeCity={ACTIVE_CITY} />
        </Route>

        <Route exact path="/login">
          <SignInScreen />
        </Route>

        <Route exact path="/favorites">
          <FavoritesScreen offers={offers} activeCity={ACTIVE_CITY}
          />
        </Route>

        <Route exact path="/offer/:id">
          <PropertyScreen offers={filterCityOffers}
          />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.Fragment>;
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  activeCity: PropTypes.string
};

export default App;

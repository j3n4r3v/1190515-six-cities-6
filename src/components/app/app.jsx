import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import FavoritesScreen from "../favorites-screen/favorites-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MainScreen from "../main-screen/main-sсreen";
import PropertyScreen from "../property-screen/property-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";

import {offerPropTypes, commentPropTypes} from "../../propetypes";

// import offers from "./mocks/offers-mocks";
// import comments from "./mocks/comments-mocks";

const App = (props) => {
  const {comments, offers} = props;
  return <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            offers={offers}
          />
        </Route>
        <Route exact path="/offer/:id">
          <PropertyScreen
            offers={offers}
            comments={comments}
          />
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.Fragment>;
};

App.propTypes = {
  comments: PropTypes.arrayOf(commentPropTypes), // comments: PropTypes.array.commentPropTypes,
  offers: PropTypes.arrayOf(offerPropTypes) // offers: PropTypes.array.offerPropTypes
};

export default App;

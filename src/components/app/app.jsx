import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import FavoritesScreen from "../favorites-screen/favorites-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MainScreen from "../main-screen/main-sсreen";
import PropertyScreen from "../property-screen/property-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";

import { cardPropTypes, commentPropTypes } from "../../propetypes";

// import cards from "./mocks/cards-mocks";
// import comments from "./mocks/comments-mocks";

const App = (props) => {
  const { comments, cards } = props;
  return <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            cards={cards}
          />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            cards={cards}
          />
        </Route>
        <Route exact path="/card/:id">
          <PropertyScreen
            cards={cards[0]}
            comments={comments}
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
  comments: PropTypes.arrayOf(commentPropTypes),
  cards: PropTypes.arrayOf(cardPropTypes)
};

export default App;

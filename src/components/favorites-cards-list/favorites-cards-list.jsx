import React from "react";
import PropTypes from "prop-types";

import FavoritesCard from "../favorites-card/favorites-card";
// import {cards} from "../mocks/cards-mocks";
import cardPropTypes from "../../propetypes";

const FavoritesCardsList = (props) => {
  const {cards} = props;
  return <React.Fragment>
    {cards.map((card, i) => <FavoritesCard key={card + i} card={card} />)}
  </React.Fragment>;
};

FavoritesCardsList.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes)
};

export default FavoritesCardsList;

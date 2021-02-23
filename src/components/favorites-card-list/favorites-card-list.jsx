import React from "react";
import PropTypes from "prop-types";

import FavoritesCard from "../favorites-card/favorites-card";
import {cardPropTypes} from "../../propetypes";

const FavoritesCardList = (props) => {
  const {cards} = props;

  return <React.Fragment>
    {cards.map((card, i) => <FavoritesCard key={card + i} card={card} />)}
  </React.Fragment>;
};

FavoritesCardList.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes)
};

export default FavoritesCardList;

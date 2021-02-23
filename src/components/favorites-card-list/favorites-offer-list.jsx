import React from "react";
import PropTypes from "prop-types";

import FavoritesCard from "../favorites-card/favorites-offer";
import {cardPropTypes} from "../../propetypes";

const FavoritesCardList = (props) => {
  const {offers} = props;

  return <React.Fragment>
    {offers.map((offer, i) => <FavoritesCard key={i} offer={offer} />)}
  </React.Fragment>;
};

FavoritesCardList.propTypes = {
  offers: PropTypes.arrayOf(cardPropTypes)
};

export default FavoritesCardList;

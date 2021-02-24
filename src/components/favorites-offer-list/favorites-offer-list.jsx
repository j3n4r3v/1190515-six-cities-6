import React from "react";
import PropTypes from "prop-types";

import FavoritesCard from "../favorites-offer/favorites-offer";
import {offerPropTypes} from "../../propetypes";

const FavoritesCardList = (props) => {
  const {offers} = props;

  return <React.Fragment>
    {offers.map((offer) => <FavoritesCard key={offer.id} offer={offer} />)}
  </React.Fragment>;
};

FavoritesCardList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

export default FavoritesCardList;

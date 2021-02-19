import React from "react";
import PropTypes from "prop-types";

import FavoritesCard from "../favorites-card/favorites-card";
// import {offers} from "../mocks/offers-mocks";
import offerPropTypes from "../../propetypes";

const FavoritesCardsList = (props) => {
  const {offers} = props;
  return <React.Fragment>
    {offers.map((offer, i) => <FavoritesCard key={offer + i} offer={offer} />)}
  </React.Fragment>;
};

FavoritesCardsList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

export default FavoritesCardsList;

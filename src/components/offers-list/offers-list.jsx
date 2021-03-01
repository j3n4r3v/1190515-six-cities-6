import React from "react";
import PropTypes from "prop-types";

import Offer from "../offer/offer";
import {offerPropTypes} from "../../propetypes";

const OffersList = (props) => {
  const {offers, activeTown} = props;

  return <React.Fragment>
    {offers.map((offer) => <Offer key={offer.id} offer={offer} activeTown={activeTown} />)}
  </React.Fragment>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  activeTown: PropTypes.number
};

export default OffersList;

import React from "react";
import PropTypes from "prop-types";

import Offer from "../offer/offer";
import {offerPropTypes} from "../../propetypes";

const OffersList = (props) => {
  const {offers} = props;

  const getComponentByType = (type, offer) => {
    switch (type) {
      case Type.CITIES:
        return <Offer offer = {offer} />;
      case Type.NEAR:
        return <Offer offer = {offer} />;
      case Type.FAVORITE:
        return <Offer offer = {offer} />;
    }

    return ``;
  };

  return <React.Fragment>
    {offers.map((offer) => <Offer key={offer.id} offer={offer} />)}
  </React.Fragment>;
};

// getComponentByType(offer.type, offer)

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
};

export default OffersList;

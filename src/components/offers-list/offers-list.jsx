import React from "react";
import PropTypes from "prop-types";

import Type from "../../const";

import Offer from "../offer/offer";
import {offerPropTypes} from "../../propetypes";

const OffersList = (props) => {
  const {offers} = props;

  const getComponentByType = (typeOffer, offer) => {
    switch (typeOffer) {
      case Type.CITIES:
        return <Offer key={offer.id} offer={offer} cardType={typeOffer}/>;
      case Type.PROPERTY:
        return <Offer key={offer.id} offer={offer} cardType={typeOffer}/>;
      case Type.FAVORITE:
        return <Offer key={offer.id} offer={offer} cardType={typeOffer}/>;
    }

    return ``;
  };

  return <React.Fragment>
    {offers.map((offer, typeOffer) => getComponentByType(typeOffer, offer))}
  </React.Fragment>;
};

// getComponentByType(offer.type, offer)

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  offer: offerPropTypes,
  cardType: PropTypes.string

};

export default OffersList;

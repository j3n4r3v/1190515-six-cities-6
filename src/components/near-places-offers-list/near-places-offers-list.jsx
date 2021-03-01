import React from "react";
import PropTypes from "prop-types";

import NearPlacesOffer from "../near-places-offer/near-places-offer";
import {offerPropTypes} from "../../propetypes";

const NearPlacesOffersList = (props) => {
  const {nearOffers} = props;

  return <React.Fragment>
    {nearOffers.map((offer) => <NearPlacesOffer key={offer.id} offer={offer} />)}
  </React.Fragment>;
};

NearPlacesOffersList.propTypes = {
  nearOffers: PropTypes.arrayOf(offerPropTypes)
};

export default NearPlacesOffersList;

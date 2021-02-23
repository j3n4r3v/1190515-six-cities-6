import React from "react";
import PropTypes from "prop-types";

import NearPlacesCard from "../near-places-offer/near-places-offer";
import {offerPropTypes} from "../../propetypes";

const NearPlacesCardsList = (props) => {
  const {nearOffers} = props;

  return <React.Fragment>
    {nearOffers.map((offer, i) => <NearPlacesCard key={i} offer={offer} />)}
  </React.Fragment>;
};

NearPlacesCardsList.propTypes = {
  nearOffers: PropTypes.arrayOf(offerPropTypes)
};

export default NearPlacesCardsList;

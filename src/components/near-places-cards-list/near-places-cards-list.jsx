import React from "react";
import PropTypes from "prop-types";

import NearPlacesCard from "../near-places-card/near-places-card";
// import {offers} from "../mocks/offers-mocks";
import offerPropTypes from "../../propetypes";

const NearPlacesCardsList = (props) => {
  const {offers} = props;
  return <React.Fragment>
    {offers.map((offer, i) => <NearPlacesCard key={offer + i} offer={offer} />)}
  </React.Fragment>;
};

NearPlacesCardsList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

export default NearPlacesCardsList;

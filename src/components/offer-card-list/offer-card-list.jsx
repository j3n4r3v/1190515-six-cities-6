import React from "react";
import PropTypes from "prop-types";
// import OfferType from "../../const";
import OfferCard from "../offer-card/offer-card";
// import {offers} from "../mocks/offers-mocks";
import offerPropTypes from "../../propetypes";

const OfferCardList = (props) => {
  const {offers} = props;
  return <React.Fragment>
    {offers.map((offer, i) => <OfferCard key={offer + i} offer={offer} />)}
  </React.Fragment>;
};

OfferCardList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
  // type: PropTypes.oneOf([OfferType.APARTMENT, OfferType.PRIVATEROOM, OfferType.STUDIO]).isRequired,
};

export default OfferCardList;

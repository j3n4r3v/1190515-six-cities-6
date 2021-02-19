import React from "react";
import PropTypes from "prop-types";
// import OfferType from "../../const";
import Card from "../card/card";
// import {offers} from "../mocks/offers-mocks";
import offerPropTypes from "../../propetypes";

const CardsList = (props) => {
  const {offers} = props;
  return <React.Fragment>
    {offers.map((offer, i) => <Card key={offer + i} offer={offer} />)}
  </React.Fragment>;
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
  // type: PropTypes.oneOf([OfferType.APARTMENT, OfferType.PRIVATEROOM, OfferType.STUDIO]).isRequired,
};

export default CardsList;

import React from "react";
import PropTypes from "prop-types";

import Card from "../offer/offer";
import {offerPropTypes} from "../../propetypes";

const CardsList = (props) => {
  const {offers} = props;

  return <React.Fragment>
    {offers.map((offer, i) => <Card key={i} offer={offer} />)}
  </React.Fragment>;
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

export default CardsList;

import React from "react";
import PropTypes from "prop-types";

import Card from "../card/card";
import {cardPropTypes} from "../../propetypes";

const CardsList = (props) => {
  const {cards} = props;
  return <React.Fragment>
    {cards.map((card, i) => <Card key={card + i} card={card} />)}
  </React.Fragment>;
};

CardsList.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes)
};

export default CardsList;

import React from "react";
import PropTypes from "prop-types";

import NearPlacesCard from "../near-places-card/near-places-card";
// import {cards} from "../mocks/cards-mocks";
import cardPropTypes from "../../propetypes";

const NearPlacesCardsList = (props) => {
  const {cards} = props;
  return <React.Fragment>
    {cards.map((card, i) => <NearPlacesCard key={card + i} card={card} />)}
  </React.Fragment>;
};

NearPlacesCardsList.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes)
};

export default NearPlacesCardsList;

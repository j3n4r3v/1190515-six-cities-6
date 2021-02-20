import React from "react";
import PropTypes from "prop-types";

import NearPlacesCard from "../near-places-card/near-places-card";
import cardPropTypes from "../../propetypes";

const NearPlacesCardsList = (props) => {
  const {cards} = props;
  return <React.Fragment>
    {cards.map((card, i) => <NearPlacesCard key={card + i} card={card} />)}
  </React.Fragment>;
};

NearPlacesCardsList.propTypes = {
  cards: PropTypes.shape(cardPropTypes)
};

export default NearPlacesCardsList;

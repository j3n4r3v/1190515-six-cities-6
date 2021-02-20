import React from "react";
import PropTypes from "prop-types";

import NearPlacesCard from "../near-places-card/near-places-card";
import cardPropTypes from "../../propetypes";

const NearPlacesCardsList = (props) => {
  const {name} = props;
  return <React.Fragment>
    {name.map((card, i) => <NearPlacesCard key={card + i} card={card} />)}
  </React.Fragment>;
};

NearPlacesCardsList.propTypes = {
  name: PropTypes.arrayOf(cardPropTypes)
};

export default NearPlacesCardsList;

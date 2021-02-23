import React from "react";
import PropTypes from "prop-types";

const PropertyInsideItem = (props) => {
  const {good} = props;
  return <React.Fragment>
    <li className="property__inside-item">
      {good}
    </li>
  </React.Fragment>;
};

PropertyInsideItem.propTypes = {
  good: PropTypes.string
};

export default PropertyInsideItem;

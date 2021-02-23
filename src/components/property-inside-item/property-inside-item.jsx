import React from "react";
import PropTypes from "prop-types";

const PropertyInsideItem = ({good}) => {

  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
};

PropertyInsideItem.propTypes = {
  good: PropTypes.string
};

export default PropertyInsideItem;

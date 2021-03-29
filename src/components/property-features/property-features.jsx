import React from "react";
import PropTypes from "prop-types";

const PropertyFeatures = ({type, bedrooms, maxAdults}) => {

  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
};

PropertyFeatures.propTypes = {
  type: PropTypes.string,
  bedrooms: PropTypes.number,
  maxAdults: PropTypes.number
};

export default PropertyFeatures;

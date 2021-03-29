import React from "react";
import PropTypes from "prop-types";

const PropertyInside = ({goods}) => {

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {
          goods.map((good, i) => {
            return (
              <React.Fragment key={good + i}>
                <li className="property__inside-item">
                  {good}
                </li>
              </React.Fragment>
            );
          })
        }
      </ul>
    </div>
  );
};

PropertyInside.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string)
};

export default PropertyInside;

import React from "react";
import PropTypes from "prop-types";

const PropertyGalleryCard = (props) => {
  const {image} = props;

  return <React.Fragment>
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio" />
    </div>
  </React.Fragment>;
};

PropertyGalleryCard.propTypes = {
  image: PropTypes.string
};

export default PropertyGalleryCard;
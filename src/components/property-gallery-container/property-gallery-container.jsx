import React from "react";
import PropTypes from "prop-types";

const PropertyGalleryContainer = ({images}) => {

  const imagesArray = images.length > 6 ? images.slice(0, 6) : images;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          imagesArray.map((image, i) => {
            return (
              <React.Fragment key={image + i}>
                <div className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              </React.Fragment>
            );
          })
        }
      </div>
    </div>
  );
};

PropertyGalleryContainer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
};

export default PropertyGalleryContainer;

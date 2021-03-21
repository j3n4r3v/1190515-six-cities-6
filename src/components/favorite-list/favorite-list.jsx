import React from "react";
import PropTypes from "prop-types";

import FavoriteItems from "../favorite-items/favorite-items";
import {offerPropTypes} from "../../propetypes";
import {CITIES} from "../../const";

const FavoriteList = (props) => {
  const {offers, typeOffer} = props;

  return (
    <ul className="favorites__list">

      {
        CITIES.map((city, i) => {
          const filteredOffers = offers.filter((offer) => offer.city.name === city);
          return filteredOffers.length < 1
            ? ``
            : <FavoriteItems typeOffer={typeOffer} offers={filteredOffers} city={city} key={city + i} />;
        })
      }

    </ul>
  );
};

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  typeOffer: PropTypes.string
};

export default FavoriteList;

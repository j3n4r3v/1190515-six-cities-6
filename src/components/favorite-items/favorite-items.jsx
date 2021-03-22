import React from "react";
import PropTypes from "prop-types";
import ContainerOffersList from "../container-offers-list/container-offers-list";
import {offerPropTypes} from "../../propetypes";

const FavoriteItems = (props) => {
  const {city, offers, typeOffer} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <ContainerOffersList offers={offers} typeOffer={typeOffer} onChangeActiveOffer={() => {}} />
    </li>
  );
};

FavoriteItems.propTypes = {
  city: PropTypes.string,
  offers: PropTypes.arrayOf(offerPropTypes),
  typeOffer: PropTypes.string
};

export default FavoriteItems;

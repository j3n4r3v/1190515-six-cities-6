import React from "react";
import PropTypes from "prop-types";
import ContainerOffersList from "../container-offers-list/container-offers-list";
import {offerPropTypes} from "../../propetypes";

import {useDispatch} from "react-redux";
import {updateFavorites} from "../store/api/api-actions";

const FavoriteItems = ({city, offers, typeOffer}) => {

  const dispatch = useDispatch();

  const handleFavorite = (id, status) => {
    dispatch(updateFavorites(id, status));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <ContainerOffersList offers={offers} typeOffer={typeOffer} onChangeActiveOffer={() => { }} onFavoriteClick={handleFavorite} />
    </li>
  );
};

FavoriteItems.propTypes = {
  city: PropTypes.string,
  typeOffer: PropTypes.string,
  offers: PropTypes.arrayOf(offerPropTypes),
};

export default FavoriteItems;

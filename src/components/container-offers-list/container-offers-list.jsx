import React from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer";
import {Type} from "../../const";
import {offerPropTypes} from "../../propetypes";

const ContainerOffersList = ({offers, typeOffer, onChangeActiveOffer, onScrollToTop, onFavoriteClick}) => {

  const container = Type[typeOffer];

  return (
    <div className={`${container.divClass} places__list`}>

      {
        offers.length > 0 &&
          offers.map((it) =>

            <Offer typeOffer={typeOffer}
              offer={it}
              key={it.id}
              onChangeActiveOffer={onChangeActiveOffer}
              onScrollToTop={onScrollToTop}
              onFavoriteClick={onFavoriteClick}
            />)
      }

    </div>
  );
};

ContainerOffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  typeOffer: PropTypes.string,
  onChangeActiveOffer: PropTypes.func,
  onScrollToTop: PropTypes.func,
  onFavoriteClick: PropTypes.func
};

export default ContainerOffersList;

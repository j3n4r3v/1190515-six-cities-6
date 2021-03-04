import React from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer";
import {Type} from "../../const";
import {offerPropTypes} from "../../propetypes";

const ContainerOffersList = (props) => {
  const {offers, typeOffer} = props;

  const container = Type[typeOffer];

  return (
    <div className={`${container.divClass} places__list`}>

      {
        offers.length > 0 ? offers.map((it) => <Offer typeOffer={typeOffer} offer={it} key={it.id} />) : <p>No places to stay available</p>
      }

    </div>
  );
};

ContainerOffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  typeOffer: PropTypes.string
};

export default ContainerOffersList;

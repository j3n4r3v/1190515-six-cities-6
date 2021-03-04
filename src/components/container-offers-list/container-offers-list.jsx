import React from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer";
import {Type} from "../../const";
import {offerPropTypes} from "../../propetypes";

const ContainerOffersList = (props) => {
  const {offers, typeOffer} = props;

  const containerType = Type[typeOffer]; // Type.typeOffer ?

  return (
    <div className={`${containerType.divClass} places__list ${typeOffer === `CITY` ? `tabs__content` : ``}`}>

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
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../propetypes";
import {Type} from "../../const";

const Offer = (props) => {
  const {offer, typeOffer} = props; // typeoffer?
  const {previewImage, price, rating, title, type, id, isPremium} = offer;

  const offerType = Type.typeOffer;

  return <React.Fragment>
    <article className={`${offerType.article} place-offer`}>
      {
        isPremium && <div className="place-offer__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${offerType.img.containerClass}__image-wrapper place-offer__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-offer__image" src={previewImage} width={`${offerType.img.width}`} height={`${offerType.img.height}`} alt="Place image" />
        </Link>
      </div>
      <div className={`${offerType.info}`}>
        <div className="place-offer__price-wrapper">
          <div className="place-offer__price">
            <b className="place-offer__price-value">{price}</b>
            <span className="place-offer__price-text">/&nbsp;night</span>
          </div>
          <button className="place-offer__bookmark-button button" type="button">
            <svg className="place-offer__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-offer__rating rating">
          <div className="place-offer__stars rating__stars">
            <span style={{width: `${20 * rating}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-offer__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-offer__type">{type}</p>
      </div>
    </article>
  </React.Fragment>;
};

Offer.propTypes = {
  offer: offerPropTypes,
  typeOffer: PropTypes.string
};

export default Offer;

import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../propetypes";
import Type from "../../const";

const Offer = (props) => {
  const {offer, typeCard} = props; // typeCard?
  const {previewImage, price, rating, title, type, id, isPremium} = offer;

  const cardType = Type[typeCard];

  return <React.Fragment>
    <article className={`${cardType.article} place-card`}>
      {
        isPremium && <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${cardType.img.containerClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={`${cardType.img.width}`} height={`${cardType.img.height}`} alt="Place image" />
        </Link>
      </div>
      <div className={`${cardType.info}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * rating}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  </React.Fragment>;
};

Offer.propTypes = {
  offer: offerPropTypes,
  typeCard: PropTypes.string
};

export default Offer;

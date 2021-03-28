import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../propetypes";
import {Type} from "../../const";

const Offer = (props) => {
  const {offer, typeOffer, onChangeActiveOffer} = props;

  // eslint-disable-next-line no-console
  console.log(`<Offer/>.: Render`);

  const {previewImage, price, rating, title, type, id, isPremium, isFavorite} = offer;

  const offerType = Type[typeOffer];

  return <React.Fragment>
    <article className={`${offerType.article} place-card`} onMouseOver={() => onChangeActiveOffer(offer.id)}>
      {
        isPremium && <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${offerType.img.containerClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={`${offerType.img.width}`} height={`${offerType.img.height}`} alt="Place image" />
        </Link>
      </div>
      <div className={`${offerType.info}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`} type="button">
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
  typeOffer: PropTypes.string,
  onChangeActiveOffer: PropTypes.func
};

export default Offer;

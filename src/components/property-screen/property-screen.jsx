import React from "react";
// import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import AuthInfo from "../auth-info/auth-info";

import {cardPropTypes, commentPropTypes} from "../../propetypes";

import NearPlacesCardsList from "../near-places-cards-list/near-places-cards-list"

const PropertyScreen = (props) => {
  const {comments, cards} = props;
  const {user.avatarUrl, user.name, comment, date} = comments;
  const {images, bedrooms, price, maxAdults, goods, rating, title, type, host.name, host.avatarUrl, description} = cards;

  return <React.Fragment>
    <div>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">

        <AuthInfo /> {/* Правильно ли я вставляю компонент в другой компонент? */}

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <div className="property__image-wrapper">
                  <img className="property__image" src={images} alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src={images} alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src={images} alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src={images} alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src={images} alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src={images} alt="Photo studio" />
                </div>
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `80%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What`s inside</h2>
                  <ul className="property__inside-list">
                    <li className="property__inside-item">
                      {goods}
                    </li>
                    <li className="property__inside-item">
                      {goods}
                    </li>
                    <li className="property__inside-item">
                      {goods}
                    </li>
                    <li className="property__inside-item">
                      {goods}
                    </li>
                    <li className="property__inside-item">
                      {goods}
                    </li>
                    <li className="property__inside-item">
                      {goods}
                    </li>
                    <li className="property__inside-item">
                      {goods}
                    </li>
                    <li className="property__inside-item">
                      {goods}
                    </li>
                    <li className="property__inside-item">
                      {goods}
                    </li>
                    <li className="property__inside-item">
                      {goods}
                    </li>
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}.
                    </p>
                    <p className="property__text">
                      {description}.
                    </p>
                  </div>
                </div>

                {/* REWIEVS */}

                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
                  <ul className="reviews__list">
                    <li className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
                        </div>
                        <span className="reviews__user-name">
                          {user.name}
                        </span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{width: `80%`}} />
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          {comment}.
                        </p>
                        <time className="reviews__time" dateTime={date}>April 2019</time>
                      </div>
                    </li>
                  </ul>

                   {/* FORM */}

                  <form className="reviews__form form" action="#" method="post">
                    <label className="reviews__label form__label" htmlFor="review">Your review</label>
                    <div className="reviews__rating-form form__rating">
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
                      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
                      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
                      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
                      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
                      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                        <svg className="form__star-image" width={37} height={33}>
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                    </div>
                    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} />
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                    </div>
                  </form>
                </section>



              </div>
            </div>
            <section className="property__map map" />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">

                <NearPlacesCardsList />

              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  </React.Fragment>;
};

PropertyScreen.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes),
  comments: PropTypes.arrayOf(commentPropTypes),
  authInfo: PropTypes.shape(authPropTypes)
};

export default PropertyScreen;

import React from "react";
// import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {authInfoMocks} from "../../mocks/auth-info-mocks";
import AuthInfoScreen from "../auth-info-screen/auth-info-screen";

import authPropTypes from "../../propetypes";
import FeedBackForm from "../feedbackform/feedbackform";

import {cardPropTypes, commentPropTypes} from "../../propetypes";

import NearPlacesCardsList from "../near-places-cards-list/near-places-cards-list";

const PropertyScreen = (props) => {
  const {comments, cards} = props;
  const {images, bedrooms, price, maxAdults, goods, rating, title, type, host, description} = cards;
  const {name, avatarUrl} = host;
  return <React.Fragment>
    <div>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">
        <AuthInfoScreen
          authInfo={authInfoMocks}
        />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <div className="property__image-wrapper">
                  <img className="property__image" src={images[0]} alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src={images[1]} alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src={images[2]} alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src={images[3]} alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src={images[4]} alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src={images[0]} alt="Photo studio" />
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
                      <img className="property__avatar user__avatar" src={avatarUrl} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {name}
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
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
                  {/* REWIEVS */}
                  {/* // Отсюда взять на компонент-комментариев лучше? */}
                  <ul className="reviews__list">
                    {comments.map((rewiev) => {
                      const {id, user, comment, date} = rewiev;
                      return <li className="reviews__item" key={id}>
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
                      </li>;
                    })
                    }
                  </ul>
                  {/* FORM */}
                  <FeedBackForm />
                </section>
              </div>
            </div>
            <section className="property__map map" />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <NearPlacesCardsList
                  name={[cards]}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  </React.Fragment>;
};

PropertyScreen.propTypes = {
  cards: PropTypes.shape(cardPropTypes),
  comments: PropTypes.arrayOf(commentPropTypes),
  authInfo: PropTypes.shape(authPropTypes)
};

export default PropertyScreen;

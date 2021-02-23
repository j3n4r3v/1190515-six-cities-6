import React from "react";
// import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {authInfoMocks} from "../../mocks/auth-info-mocks";
import {commentsMocks} from "../../mocks/comments-mocks";

import AuthInfoScreen from "../auth-info-screen/auth-info-screen";
import {getRandomArrayItem, getRandomValueFromMassiveWithObjects} from "../../utils";

import FeedBackForm from "../feedbackform/feedbackform";
import Rewiev from "../rewiev-list/review-list";

import {cardPropTypes} from "../../propetypes";

import NearPlacesCardsList from "../near-places-cards-list/near-places-cards-list";

const PropertyScreen = (props) => {
  const {cards} = props;
  const gerRandomCardFromArray = getRandomArrayItem(cards);
  const {previewImage, bedrooms, price, maxAdults, goods, rating, title, type, host, description} = gerRandomCardFromArray;
  const {name, avatarUrl} = host;
  const getRandomKey = getRandomValueFromMassiveWithObjects(cards);

  return <React.Fragment>
    <div className="page">

      <AuthInfoScreen
        authInfo={authInfoMocks}
      />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src={getRandomKey} alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={getRandomKey} alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={previewImage} alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={previewImage} alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={previewImage} alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={previewImage} alt="Photo studio" />
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
                  <span style={{width: `${20 * rating}%`}} />
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
                    {getRandomArrayItem(goods)}
                  </li>
                  <li className="property__inside-item">
                    {getRandomArrayItem(goods)}
                  </li>
                  <li className="property__inside-item">
                    {getRandomArrayItem(goods)}
                  </li>
                  <li className="property__inside-item">
                    {getRandomArrayItem(goods)}
                  </li>
                  <li className="property__inside-item">
                    {getRandomArrayItem(goods)}
                  </li>
                  <li className="property__inside-item">
                    {getRandomArrayItem(goods)}
                  </li>
                  <li className="property__inside-item">
                    {getRandomArrayItem(goods)}
                  </li>
                  <li className="property__inside-item">
                    {getRandomArrayItem(goods)}
                  </li>
                  <li className="property__inside-item">
                    {getRandomArrayItem(goods)}
                  </li>
                  <li className="property__inside-item">
                    {getRandomArrayItem(goods)}
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

                <Rewiev
                  comments={[getRandomArrayItem(commentsMocks)]}
                />

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
                nearCards={[getRandomArrayItem(cards)]}
              />

            </div>
          </section>
        </div>
      </main>
    </div>
  </React.Fragment>;
};

PropertyScreen.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes)
};

export default PropertyScreen;

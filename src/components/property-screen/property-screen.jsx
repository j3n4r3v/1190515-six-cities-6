import React from "react";
import PropTypes from "prop-types";

import {CITIES} from "../../const";

import {authInfoMocks} from "../../mocks/auth-info-mocks";
import {reviewsMocks} from "../../mocks/reviews-mocks";
import {offersMocks} from "../../mocks/offers-mocks";

import AuthInfoScreen from "../auth-info-screen/auth-info-screen";
import {getRandomArrayItem} from "../../utils";

import FeedBackForm from "../feedbackform/feedbackform";
import ReviewList from "../rewiev-list/review-list";
import PropertyGalleryOffer from "../property-gallery-offer/property-gallery-offer";
import PropertyInsideItem from "../property-inside-item/property-inside-item";
import {offerPropTypes} from "../../propetypes";

import OffersList from "../offers-list/offers-list";
import Map from "../map/map";

const PropertyScreen = (props) => {
  const {offers} = props;
  const gerRandomOfferFromArray = getRandomArrayItem(offers);
  const {isPremium, images, bedrooms, price, maxAdults, goods, rating, title, type, host, description} = gerRandomOfferFromArray;
  const {name, avatarUrl} = host;
  const imagesArray = images.length > 6 ? images.splice(0, 6) : images;

  const nearOffers = offersMocks.filter((offer) => {
    return offer.city.name === CITIES[3];
  });
  const nearOffersFilter = nearOffers.length > 3 ? nearOffers.splice(0, 4) : nearOffers;

  return <React.Fragment>
    <div className="page">

      <AuthInfoScreen
        authInfo={authInfoMocks}
      />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                imagesArray.map((image, i) => <PropertyGalleryOffer image={image} key={image + i} />)
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium && <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
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
                  {
                    goods.map((good, i) => <PropertyInsideItem good={good} key={good + i} />)
                  }
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
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsMocks.length}</span></h2>

                <ReviewList
                  reviews = {reviewsMocks}
                />

                <FeedBackForm />

              </section>
            </div>
          </div>
          <section className="property__map map">

            <Map
              offers = {nearOffersFilter}
              activePin = {nearOffersFilter[0].id}
            />

          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">

                <OffersList
                  offers={nearOffersFilter}
                />

              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  </React.Fragment>;
};

PropertyScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  activePin: PropTypes.number
};

export default PropertyScreen;

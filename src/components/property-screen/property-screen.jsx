import React from "react";
import PropTypes from "prop-types";

import {authInfoMocks} from "../../mocks/auth-info-mocks";
import {reviewsMocks} from "../../mocks/reviews-mocks";

import AuthInfoScreen from "../auth-info-screen/auth-info-screen";
import {getRandomArrayItem} from "../../utils";

import FeedBackForm from "../feedbackform/feedbackform";
import ReviewList from "../rewiev-list/review-list";
import PropertyGalleryOffer from "../property-gallery-offer/property-gallery-offer";
import PropertyInsideItem from "../property-inside-item/property-inside-item";
import {offerPropTypes} from "../../propetypes";
import {connect} from "react-redux";

import ContainerOffersList from "../container-offers-list/container-offers-list";

import Map from "../map/map";

const PropertyScreen = (props) => {
  const {offers} = props;
  const randomOfferFromArray = getRandomArrayItem(offers);
  const {isPremium, images, bedrooms, price, maxAdults, goods, rating, title, type, host, description} = randomOfferFromArray;
  const {name, avatarUrl} = host;
  const imagesArray = images.length > 6 ? images.slice(0, 6) : images;

  const nearOffersFilter = offers.length > 3 ? offers.slice(0, 4) : offers;

  const PROPERTY = `PROPERTY`;

  const nearOffersFilterList = nearOffersFilter.slice(1);

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
              activePin={randomOfferFromArray.id}
              mapSettings={PROPERTY}
            />

          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>

              <ContainerOffersList
                offers={nearOffersFilterList}
                typeOffer={PROPERTY}
              />

            </section>
          </div>
        </section>
      </main>
    </div>
  </React.Fragment>;
};

PropertyScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  randomOfferFromArray: offerPropTypes,
  activePin: PropTypes.string,
  typeOffer: PropTypes.string,
  mapSettings: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    activePin: state.activeCity,
    offers: state.activeOffers,
  };
};

export default connect(mapStateToProps)(PropertyScreen);
export {PropertyScreen};

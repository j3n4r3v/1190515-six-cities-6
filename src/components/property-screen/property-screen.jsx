import React, {useEffect} from "react";

import LoadingScreen from "../loading-screen/loading-screen";
import AuthInfoScreen from "../auth-info-screen/auth-info-screen";

import PropertyGalleryContainer from "../property-gallery-container/property-gallery-container";
import PropertyInside from "../property-inside/property-inside";
import PropertyFeatures from "../property-features/property-features";
import PropertyHost from "../property-host/property-host";
import PropertyReviews from "../property-reviews/property-reviews";

import ContainerOffersList from "../container-offers-list/container-offers-list";
import Map from "../map/map";

import {useParams, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {getActiveReviews} from "../../store/selectors";

import {fetchPropertyInfo, updateSelectOffer, updateNearOffers} from "../../store/api-actions";

const PropertyScreen = () => {

  const {id} = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchPropertyInfo(id));
  }, [id]);

  // const {isDataLoaded} = useSelector((state) => state.MAIN);
  const {offer, nearOffers, isPropertySetLoaded} = useSelector((state) => state.PROPERTY);
  const {authInfo} = useSelector((state) => state.USER);
  const reviews = useSelector(getActiveReviews);


  // if (!isDataLoaded || !propertyInfoIsLoaded) {
  if (!isPropertySetLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const {isPremium, isFavorite, images, bedrooms, price, maxAdults, goods, rating, title, type, host, description} = offer;

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const handleFavorite = (selectOfferId, status) => {
    dispatch(updateNearOffers(selectOfferId, status));
  };

  return <React.Fragment>
    <div className="page">

      <AuthInfoScreen />

      <main className="page__main page__main--property">
        <section className="property">

          <PropertyGalleryContainer images={images} />

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
                <button className={`property__bookmark-button button ${isFavorite && `property__bookmark-button--active`}`}
                  type="button"
                  onClick={() => authInfo && dispatch(updateSelectOffer(id, !isFavorite)) || history.push(`${`/login`}`)}
                >
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

              <PropertyFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />

              <div className="property__price">
                <b className="property__price-value">{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <PropertyInside goods={goods} />

              <PropertyHost host={host} description={description} />

              <PropertyReviews reviews={reviews} />

            </div>
          </div>
          <section className="property__map map">

            <Map
              offers={nearOffers}
              activeOffer={offer}
              activeCity={offer}
              mapSettings={`PROPERTY`}
            />

          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>

              <ContainerOffersList
                offers={nearOffers}
                typeOffer={`PROPERTY`}
                onScrollToTop={handleScrollTop}
                onChangeActiveOffer={() => { }}
                onFavoriteClick={handleFavorite}
              />

            </section>
          </div>
        </section>
      </main>
    </div>
  </React.Fragment>;
};

export default PropertyScreen;



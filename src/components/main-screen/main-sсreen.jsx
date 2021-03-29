import React, {useState} from "react";

import ContainerOffersList from "../container-offers-list/container-offers-list";
import LocationsList from "../locations-list/locations-list";

import {useSelector, useDispatch} from "react-redux";

import {getActiveOffers} from "../../store/selectors";
import Map from "../map/map";

import AuthInfoScreen from "../auth-info-screen/auth-info-screen";
import LoadingScreen from "../loading-screen/loading-screen";

import PlacesSort from "../places-sort/places-sort";

import {updateOffers} from "../../store/api-actions";

const MainScreen = () => {

  const {activeCity, isDataLoaded} = useSelector((state) => state.MAIN);
  const offers = useSelector(getActiveOffers);

  const dispatch = useDispatch();

  const [activeOffer, setActiveOffer] = useState();

  const activeCard = offers.find((offer) => offer.city.name === activeCity);

  const handleFavorite = (id, status) => {
    dispatch(updateOffers(id, status));
  };


  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return <React.Fragment>
    <div style={{display: `none`}}>
      <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
    </div>
    <div className="page page--gray page--main">

      <AuthInfoScreen />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          <LocationsList />

        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>

              <PlacesSort />

              <ContainerOffersList
                offers={offers}
                typeOffer={`MAIN`}
                onChangeActiveOffer={setActiveOffer}
                onFavoriteClick={handleFavorite}
              />

            </section>
            <div className="cities__right-section">
              <section className="cities__map map">

                <Map
                  offers={offers}
                  activeOffer={activeOffer}
                  mapSettings={`MAIN`}
                  activeCity={activeCard}
                />

              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  </React.Fragment>;
};

export default MainScreen;


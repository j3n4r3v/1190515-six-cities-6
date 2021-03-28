import React, {useState} from "react";
import PropTypes from "prop-types";

import {CITIES} from "../../const";
import {authPropTypes, offerPropTypes} from "../../propetypes";

import ContainerOffersList from "../container-offers-list/container-offers-list";

import {getActiveOffers} from "../../store/selectors";
import Map from "../map/map";

import AuthInfoScreen from "../auth-info-screen/auth-info-screen";
import LoadingScreen from "../loading-screen/loading-screen";

import Sort from "../sort/sort";

import {connect} from "react-redux";
import {changeCity} from "../../store/actions";

const MainScreen = (props) => {
  const {offers, activeCity, onChangeCity, isDataLoaded} = props;
  const [activeOfferId, setActiveOfferId] = useState();
  const MAIN = `MAIN`;
  const activeCard = offers.find((offer) => offer.city.name === activeCity);
  // eslint-disable-next-line no-console
  console.log(<MainScreen />);

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
          <section className="locations container">
            <ul className="locations__list tabs__list">

              {CITIES.map((city, i) => {
                return (
                  <li className={`locations__item-link tabs__item`} key={city + i}>
                    <a className={`locations__item-link tabs__item ${city === activeCity && `tabs__item--active`}`}
                      href="#"
                      onClick={() => onChangeCity(city)}>
                      <span>{city}</span>
                    </a>
                  </li>
                );
              })}

            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>

              <Sort />

              <ContainerOffersList
                offers={offers}
                typeOffer={MAIN}
                onChangeActiveOffer={setActiveOfferId}
              />

            </section>
            <div className="cities__right-section">
              <section className="cities__map map">

                <Map
                  offers={offers}
                  activeOfferId={activeOfferId}
                  mapSettings={MAIN}
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

MainScreen.propTypes = {
  authInfo: authPropTypes,
  offers: PropTypes.arrayOf(offerPropTypes),
  offer: offerPropTypes,
  activeOfferId: PropTypes.number,
  activeCity: PropTypes.string,
  typeOffer: PropTypes.string,
  onChangeCity: PropTypes.func,
  isDataLoaded: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity,
    offers: getActiveOffers(state),
    isDataLoaded: state.isDataLoaded
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (city) => {
    dispatch(changeCity(city));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

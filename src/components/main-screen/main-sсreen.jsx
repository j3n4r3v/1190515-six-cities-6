import React from "react";
import PropTypes from "prop-types";

import {CITIES, SortType} from "../../const";
import {authPropTypes, offerPropTypes} from "../../propetypes";

import ContainerOffersList from "../container-offers-list/container-offers-list";

import Map from "../map/map";

import AuthInfoScreen from "../auth-info-screen/auth-info-screen";

import Sort from "../sort/sort";

import {authInfoMocks} from "../../mocks/auth-info-mocks";

import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import withActiveId from "../../hocs/with-active-id";

const MainScreen = (props) => {
  const {offers,
    activeCity,
    activeCityId,
    onActiveIdChange,
    onChangeCity,
    onChangeOffersSortType} = props;
  const MAIN = `MAIN`;
  const SORTS = Object.values(SortType);

  return <React.Fragment>
    <div style={{display: `none`}}>
      <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
    </div>
    <div className="page page--gray page--main">

      <AuthInfoScreen
        authInfo={authInfoMocks}
      />

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

              <Sort
                isActiveOption = {SortType}
                sorts = {SORTS}
                onSortClick={() => onChangeOffersSortType()} // как понять какой сюда нужно параметр и нужно ли вообще?
              />

              <ContainerOffersList
                offers={offers}
                typeOffer={MAIN}
                onOfferHover={onActiveIdChange} // как понять какой сюда нужно параметр и нужно ли вообще?
              />

            </section>
            <div className="cities__right-section">
              <section className="cities__map map">

                <Map
                  offers = {offers}
                  activeCityId = {activeCityId}
                  mapSettings = {MAIN}
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
  authInfo: PropTypes.arrayOf(authPropTypes),
  offers: PropTypes.arrayOf(offerPropTypes),
  offer: offerPropTypes,
  activeCityId: PropTypes.number,
  activeCity: PropTypes.string,
  typeOffer: PropTypes.string,
  onActiveIdChange: PropTypes.func,
  onChangeCity: PropTypes.func,
  onChangeOffersSortType: PropTypes.func,
  onChangeActiveCityId: PropTypes.func
};

const mapStateToProps = (state) => { // Передает обновленные свойства из store в компонент
  return {
    activeCity: state.activeCity,
    offers: state.offers.filter((offer) => {
      return offer.city.name === state.activeCity;
    }),
    activeCityId: state.activeCityId
  };
};

const mapDispatchToProps = (dispatch) => ({ // Передает в компонент методы для обновления store
  onChangeCity: (city) => {
    dispatch(ActionCreator.changeCity(city));
  },
  onChangeActiveCityId: (activeId) => {
    dispatch(ActionCreator.changeActiveCityId(activeId));
  },
  onChangeOffersSortType: (sortType) => {
    dispatch(ActionCreator.changeOffersSortType(sortType));
  }
});

export {MainScreen};
export default withActiveId(
    connect(mapStateToProps, mapDispatchToProps)(MainScreen) // использует store
);

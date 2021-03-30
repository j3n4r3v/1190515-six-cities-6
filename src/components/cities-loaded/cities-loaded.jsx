import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getActiveOffers} from "../../store/selectors";
import Map from "../map/map";
import ContainerOffersList from "../container-offers-list/container-offers-list";
import PlacesSort from "../places-sort/places-sort";
import {updateOffers} from "../../store/api-actions";

const CitiesLoaded = () => {
  const {activeCity} = useSelector((state) => state.MAIN);
  const offers = useSelector(getActiveOffers);

  const dispatch = useDispatch();

  const [activeOffer, setActiveOffer] = useState();

  const activeCard = offers.find((offer) => offer.city.name === activeCity);

  const handleFavorite = (id, status) => {
    dispatch(updateOffers(id, status));
  };

  return (
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
  );
};

export default CitiesLoaded;

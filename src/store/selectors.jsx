import {createSelector} from "reselect";

const getCity = (state) => state.activeCity;
const getOffers = (state) => state.offers;
const getOption = (state) => state.activeOption;

export const getActiveOffers = createSelector(
    [getCity, getOffers, getOption],
    (city, offers, option) => {
      const activeOffer = offers.filter((offer) => offer.city.name === city);

      switch (option) {
        case `Price: low to high`:
          return activeOffer.sort((a, b) => a.price - b.price);
        case `Price: high to low`:
          return activeOffer.sort((a, b) => b.price - a.price);
        case `Top rated first`:
          return activeOffer.sort((a, b) => b.rating - a.rating);
        default:
          return activeOffer;
      }
    }
);

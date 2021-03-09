const OfferType = {
  APARTMENT: `Apartment`,
  PRIVATEROOM: `Private room`,
  STUDIO: `Studio`
};

const SortType = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

const Type = {
  MAIN: {
    divClass: `cities__places-list tabs__content`,
    article: `cities__place-card`,
    img: {
      containerClass: `cities`,
      width: 260,
      height: 200
    },
    info: `place-card__info`,
  },
  PROPERTY: {
    divClass: `near-places__list`,
    article: `near-places__card`,
    img: {
      containerClass: `near-places`,
      width: 260,
      height: 200
    },
    info: `place-card__info`,

  },
  FAVORITE: {
    divClass: `favorites__places`,
    article: `favorites__card`,
    img: {
      containerClass: `favorites`,
      width: 150,
      height: 110
    },
    info: `favorites__card-info`,
  },
};

const MapSettings = {
  MAIN: {
    width: `100%`,
    height: `100%`
  },
  PROPERTY: {
    width: `1144px`,
    height: `579px`,
    margin: `0 auto 50px`,
  }
};

const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export {OfferType, CITIES, Type, MapSettings, SortType};

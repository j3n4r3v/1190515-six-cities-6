const SortType = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const stars = [5, 4, 3, 2, 1];

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

export {CITIES, Type, MapSettings, SortType, AuthorizationStatus, stars};

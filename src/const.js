const PlacesSortType = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

const stars = [5, 4, 3, 2, 1];

const CommentLength = {
  MIN: 50,
  MAX: 300
};

const WIDTH_PER_STAR = 20;

const ERROR_TIMEOUT = 3000;

const AppRoute = {
  MAIN: `/`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  OFFER: `/offer`,
  NOT_FOUND: `/not-found`
};
const APIRoute = {
  LOGIN: `/login`,
  OFFERS: `/hotels`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`,
  LOGOUT: `/logout`,
  NEAROFFERS: `/nearby`
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

export {CITIES, Type, MapSettings, PlacesSortType, CommentLength, ERROR_TIMEOUT, WIDTH_PER_STAR, stars, AppRoute, APIRoute};

export const ActionType = {
  ACTIVE_CITY: `main/activeCity`,
  CHANGE_ACTIVE_SORT_TYPE: `main/changeActiveSortType`,
  RECEIVE_OFFERS: `main/receiveOffers`,
  RECEIVE_REVIEWS: `property/receiveReviews`,
  RECEIVE_NEAR_OFFERS_LIST: `property/receiveNearOffersList`,
  RECEIVE_FAVORITE_OFFERS: `favorite/receiveFavoriteOffers`,
  // IS_NEAR_OFFERS_LOADED: `property/isNearOffersLoaded`,
  // CHANGE_FAVORITE_OFFER: `favorite/changeFavoriteOffer`,
  RECEIVE_AUTHORIZATION_STATUS: `login/receiveAuthorizationStatus`,
  // REDIRECT_TO_ROUTE: `login/redirectToRoute`,
  SET_AUTHORIZATION_INFO: `login/setAuthInfo`
};

export const ActionCreator = { // Для описания actions в виде обьектов
  changeCity: (city) => ({
    type: ActionType.ACTIVE_CITY,
    payload: city
  }),
  changeActiveSortType: (option) => ({
    type: ActionType.CHANGE_ACTIVE_SORT_TYPE,
    payload: option
  }),
  receiveOffers: (data) => ({
    type: ActionType.RECEIVE_OFFERS,
    payload: data
  }),
  receiveReviews: (data) => ({
    type: ActionType.RECEIVE_REVIEWS,
    payload: data
  }),
  receiveNearOffersList: (list) => ({
    type: ActionType.RECEIVE_NEAR_OFFERS_LIST,
    payload: list
  }),
  // isNearOffersLoaded: () => ({
  //   type: ActionType.IS_NEARBY_OFFERS_LOADED
  // }),
  receiveFavoriteOffers: (data) => ({
    type: ActionType.RECEIVE_FAVORITE_OFFERS,
    payload: data
  }),
  // changeFavoriteOffer: (data) => ({
  //   type: ActionType.CHANGE_FAVORITE_OFFER,
  //   payload: data
  // }),
  receiveAuthorizationStatus: (status) => ({
    type: ActionType.RECEIVE_AUTHORIZATION_STATUS,
    payload: status
  }),
  setAuthInfo: (info) => ({
    type: ActionType.SET_AUTHORIZATION_INFO,
    payload: info
  }),
  // redirectToRoute: (url) => ({
  //   type: ActionType.REDIRECT_TO_ROUTE,
  //   payload: url
  // })
};

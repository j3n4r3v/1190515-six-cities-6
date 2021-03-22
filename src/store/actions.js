export const ActionType = {
  ACTIVE_CITY: `main/activeCity`,
  CHANGE_ACTIVE_SORT_TYPE: `main/changeActiveSortType`,
  RECEIVE_OFFERS: `main/receiveOffers`,
  RECEIVE_REVIEWS: `property/receiveReviewsList`,
  RECEIVE_NEAR_OFFERS_LIST: `property/receiveNearOffersList`,
  RECEIVE_FAVORITE_OFFERS: `favorite/receiveFavoriteOffers`,
  // LOAD_COMMENTS: `property/loadComments`,
  // CHANGE_FAVORITE_OFFER: `favorite/changeFavoriteOffer`,
  RECEIVE_AUTHORIZATION_STATUS: `login/receiveAuthorizationStatus`,
  REDIRECT_TO_ROUTE: `propert/notFound`,
  SET_AUTHORIZATION_INFO: `login/setAuthInfo`,
  SET_OFFER: `property/setOffer`,
  SET_IS_DISABLED: `property/setIsDisabled`,
  SET_IS_ERROR: `property/setIsError`,
  SCREEN_IS_LOADED: ``
};

export const ActionCreator = { // Для описания actions в виде обьектов
  changeCity: (city) => ({
    type: ActionType.ACTIVE_CITY, payload: city
  }),
  changeActiveSortType: (option) => ({
    type: ActionType.CHANGE_ACTIVE_SORT_TYPE, payload: option
  }),
  receiveOffers: (data) => ({
    type: ActionType.RECEIVE_OFFERS, payload: data
  }),
  receiveReviewsList: (reviews) => ({
    type: ActionType.RECEIVE_REVIEWS, payload: reviews
  }),
  receiveNearOffersList: (list) => ({
    type: ActionType.RECEIVE_NEAR_OFFERS_LIST, payload: list
  }),
  setOffer: (data) => ({
    type: ActionType.SET_OFFER, payload: data
  }),
  setIsDisabled: (bool) => ({
    type: ActionType.SET_IS_DISABLED, payload: bool
  }),
  setIsError: (bool) => ({
    type: ActionType.SET_IS_ERROR, payload: bool
  }),
  propertyInfoIsLoaded: (bool) => ({
    type: ActionType.SCREEN_IS_LOADED, payload: bool
  }),
  receiveFavoriteOffers: (data) => ({
    type: ActionType.RECEIVE_FAVORITE_OFFERS, payload: data
  }),
  // changeFavoriteOffer: (data) => ({
  //   type: ActionType.CHANGE_FAVORITE_OFFER,
  //   payload: data
  // }),
  receiveAuthorizationStatus: (status) => ({
    type: ActionType.RECEIVE_AUTHORIZATION_STATUS, payload: status
  }),
  setAuthInfo: (info) => ({
    type: ActionType.SET_AUTHORIZATION_INFO, payload: info
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE, payload: url
  })
};

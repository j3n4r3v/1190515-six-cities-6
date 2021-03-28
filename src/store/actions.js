export const ActionType = {
  ACTIVE_CITY: `main/activeCity`,
  CHANGE_ACTIVE_SORT_TYPE: `main/changeActiveSortType`,
  RECEIVE_OFFERS: `main/receiveOffers`,
  RECEIVE_REVIEWS: `property/receiveReviewsList`,
  RECEIVE_NEAR_OFFERS_LIST: `property/receiveNearOffersList`,
  RECEIVE_FAVORITE_OFFERS: `favorite/receiveFavoriteOffers`,
  RECEIVE_AUTHORIZATION_STATUS: `login/receiveAuthorizationStatus`,
  REDIRECT_TO_ROUTE: `propert/notFound`,
  SET_AUTHORIZATION_INFO: `login/setAuthInfo`,
  SET_OFFER: `property/setOffer`,
  FORM_IS_DISABLED: `property/formIsDisabled`,
  FORM_IS_ERROR: `property/formIsError`,
  SCREEN_IS_LOADED: ``
};

// export const ActionCreator = {
export const changeCity = (city) => ({
  type: ActionType.ACTIVE_CITY, payload: city
});

export const changeActiveSortType = (option) => ({
  type: ActionType.CHANGE_ACTIVE_SORT_TYPE, payload: option
});

export const receiveOffers = (data) => ({
  type: ActionType.RECEIVE_OFFERS, payload: data
});

export const receiveReviewsList = (reviews) => ({
  type: ActionType.RECEIVE_REVIEWS, payload: reviews
});

export const receiveNearOffersList = (list) => ({
  type: ActionType.RECEIVE_NEAR_OFFERS_LIST, payload: list
});

export const setOffer = (data) => ({
  type: ActionType.SET_OFFER, payload: data
});

export const formIsDisabled = (bool) => ({
  type: ActionType.FORM_IS_DISABLED, payload: bool
});

export const formIsError = (bool) => ({
  type: ActionType.FORM_IS_ERROR, payload: bool
});

export const propertyInfoIsLoaded = (bool) => ({
  type: ActionType.SCREEN_IS_LOADED, payload: bool
});

export const receiveFavoriteOffers = (data) => ({
  type: ActionType.RECEIVE_FAVORITE_OFFERS, payload: data
});
  // changeFavoriteOffer: (data) => ({
  //   type: ActionType.CHANGE_FAVORITE_OFFER,
  //   payload: data
  // }),
  // receiveAuthorizationStatus: (status) => ({
  //   type: ActionType.RECEIVE_AUTHORIZATION_STATUS, payload: status
  // }),
export const setAuthInfo = (info) => ({
  type: ActionType.SET_AUTHORIZATION_INFO, payload: info
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE, payload: url
});

import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ACTIVE_CITY: `main/activeCity`,
  CHANGE_ACTIVE_SORT_TYPE: `main/changeActiveSortType`,
  RECEIVE_OFFERS: `main/receiveOffers`,
  RECEIVE_OFFER: `property/receiveOffer`,
  RECEIVE_REVIEWS: `property/receiveReviews`,
  RECEIVE_NEAR_OFFERS: `property/receiveNearOffers`,
  RECEIVE_FAVORITES_OFFERS: `favorite/receiveFavoritesOffers`,
  UPDATE_FAVORITES_LIST: `favorite/updateFavorites`,
  UPDATE_OFFERS_LIST: `main/updateOffers`,
  UPDATE_OFFER: `property/updateOffer`,
  UPDATE_NEAR_OFFERS_LIST: `property/updateNearOffers`,
  // RECEIVE_AUTHORIZATION_STATUS: `login/receiveAuthorizationStatus`,
  REDIRECT_TO_ROUTE: `propert/notFound`,
  SET_AUTH_INFO: `login/setAuthInfo`,
  FORM_IS_DISABLED: `property/formIsDisabled`,
  FORM_IS_ERROR: `property/formIsError`,
  PROPERTY_INFO_IS_LOADED: ``
};

export const changeCity = createAction(ActionType.ACTIVE_CITY, (city) => {
  return {
    payload: city
  };
});

export const changeActiveSortType = createAction(ActionType.CHANGE_ACTIVE_SORT_TYPE, (option) => {
  return {
    payload: option
  };
});

export const receiveOffers = createAction(ActionType.RECEIVE_OFFERS, (data) => {
  return {
    payload: data
  };
});

export const receiveReviews = createAction(ActionType.RECEIVE_REVIEWS, (reviews) => {
  return {
    payload: reviews
  };
});

export const receiveNearOffers = createAction(ActionType.RECEIVE_NEAR_OFFERS, (list) => {
  return {
    payload: list
  };
});

export const receiveOffer = createAction(ActionType.RECEIVE_OFFER, (data) => {
  return {
    payload: data
  };
});

export const receiveFavoritesOffers = createAction(ActionType.RECEIVE_FAVORITES_OFFERS, (data) => {
  return {
    payload: data
  };
});

export const updateFavoritesList = createAction(ActionType.UPDATE_FAVORITES_LIST, (data) => {
  return {
    payload: data
  };
});

export const updateOffersList = createAction(ActionType.UPDATE_OFFERS_LIST, (data) => {
  return {
    payload: data
  };
});

export const updateOffer = createAction(ActionType.UPDATE_OFFER, (data) => {
  return {
    payload: data
  };
});

export const updateNearOffersList = createAction(ActionType.UPDATE_NEAR_OFFERS_LIST, (data) => {
  return {
    payload: data
  };
});

export const formIsDisabled = createAction(ActionType.FORM_IS_DISABLED, (bool) => {
  return {
    payload: bool
  };
});

export const formIsError = createAction(ActionType.FORM_IS_ERROR, (bool) => {
  return {
    payload: bool
  };
});

export const propertyInfoIsLoaded = createAction(ActionType.PROPERTY_INFO_IS_LOADED, (bool) => {
  return {
    payload: bool
  };
});

export const receiveFavoriteOffers = createAction(ActionType.RECEIVE_FAVORITE_OFFERS, (data) => {
  return {
    payload: data
  };
});

// changeFavoriteOffer: (data) => ({
//   type: ActionType.CHANGE_FAVORITE_OFFER,
//   payload: data
// }),

export const setAuthInfo = createAction(ActionType.SET_AUTH_INFO, (info) => {
  return {
    payload: info
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url
  };
});


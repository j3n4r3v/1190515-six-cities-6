import {createAction} from '@reduxjs/toolkit';

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

export const receiveReviewsList = createAction(ActionType.RECEIVE_REVIEWS, (reviews) => {
  return {
    payload: reviews
  };
});

export const receiveNearOffersList = createAction(ActionType.RECEIVE_NEAR_OFFERS_LIST, (list) => {
  return {
    payload: list
  };
});

export const setOffer = createAction(ActionType.SET_OFFER, (data) => {
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

export const propertyInfoIsLoaded = createAction(ActionType.SCREEN_IS_LOADED, (bool) => {
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

export const setAuthInfo = createAction(ActionType.SET_AUTHORIZATION_INFO, (info) => {
  return {
    payload: info
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url
  };
});


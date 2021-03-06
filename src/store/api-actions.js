import {adaptToServer, adaptReviewsToClient, adaptAuthInfoToClient} from "../common";
import {
  receiveOffers,
  receiveOffer,
  receiveNearOffers,
  receiveReviews,
  receiveFavoritesOffers,
  propertySetIsLoaded,
  redirectToRoute,
  formIsDisabled,
  setIsError,
  setAuthInfo,
  updateFavoritesList,
  updateOffersList,
  updateOffer,
  updateNearOffersList
} from "../store/actions";

import {AppRoute, APIRoute} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}`)
    .then((response) =>
      response.data.map((offer) => adaptToServer(offer)))
    .then((data) => {
      return dispatch(receiveOffers(data));
    })
    .catch(() => {
      dispatch(setIsError(true));
    })
);

export const fetchPropertyInfo = (id) => (dispatch, _getState, api) => {
  Promise.all([
    api.get(`${APIRoute.OFFERS}/${id}`),
    api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEAROFFERS}`),
    api.get(`${APIRoute.COMMENTS}/${id}`)
  ])
    .then(([offer, nearOffers, reviews]) => {
      dispatch(receiveOffer(adaptToServer(offer.data)));
      dispatch(receiveNearOffers(nearOffers.data.map(adaptToServer)));
      dispatch(receiveReviews(reviews.data.map(adaptReviewsToClient)));
    })
    .then(() => dispatch(propertySetIsLoaded(true)))
    .catch(() => {
      dispatch(setIsError(true));
      dispatch(redirectToRoute(`${AppRoute.NOT_FOUND}`));
    });
};

export const addReview = (comment, id) => (dispatch, _getState, api) => {
  dispatch(formIsDisabled(true));
  api.post(`${APIRoute.COMMENTS}/${id}`, comment)
    .then(({data}) => dispatch(receiveReviews(data.map(adaptReviewsToClient))))
    .catch(() => {
      dispatch(setIsError(true));
    })
    .finally(() => dispatch(formIsDisabled(false)));
};

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FAVORITE}`)
    .then(({data}) =>
      dispatch(receiveFavoritesOffers((data.map((el) => adaptToServer(el))))))
    .catch(() => {
      dispatch(setIsError(true));
    })
);

export const updateOffers = (id, status) => (dispatch, _getState, api) => (
  api.post(`${`${APIRoute.FAVORITE}`}/${id}/${Number(status)}`)
    .then(({data}) => dispatch(updateOffersList((adaptToServer(data)))))
    .catch(() => {
      dispatch(setIsError(true));
    })
);

export const updateFavorites = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(updateFavoritesList(adaptToServer(data)));
      dispatch(updateOffersList(adaptToServer(data)));
    })
    .catch(() => {
      dispatch(setIsError(true));
    })
);

export const updateSelectOffer = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(updateOffer(adaptToServer(data)));
      dispatch(updateOffersList(adaptToServer(data)));
    })
    .catch(() => {
      dispatch(setIsError(true));
    })
);

export const updateNearOffers = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(updateNearOffersList(adaptToServer(data)));
      dispatch(updateOffersList(adaptToServer(data)));
    })
    .catch(() => {
      dispatch(setIsError(true));
    })
);

export const checkAuthStatus = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.LOGIN}`)
    .then(({data}) => dispatch(setAuthInfo(adaptAuthInfoToClient(data))))
    .catch(() => dispatch(setAuthInfo(null)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  return api.post(`${APIRoute.LOGIN}`, {email, password})
    .then(({data}) => {
      dispatch(setAuthInfo(adaptAuthInfoToClient(data)));
      dispatch(redirectToRoute(`${AppRoute.MAIN}`));
    })
    .catch(() => { });
};

export const logout = () => (dispatch, _getState, api) => {
  return api.get(`${APIRoute.LOGOUT}`)
    .then(() => {
      dispatch(setAuthInfo(null));
      dispatch(redirectToRoute(`${AppRoute.MAIN}`));
    })
    .catch(() => { });
};

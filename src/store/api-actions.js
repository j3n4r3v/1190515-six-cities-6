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
  formIsError,
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
    .catch(() => dispatch(redirectToRoute(`${AppRoute.NOT_FOUND}`)));
};

export const addReview = (comment, id) => (dispatch, _getState, api) => {
  dispatch(formIsDisabled(true));
  api.post(`${APIRoute.COMMENTS}/${id}`, comment)
    .then(({data}) => dispatch(receiveReviews(data.map(adaptReviewsToClient))))
    .catch(() => dispatch(formIsError(true)))
    .finally(() => dispatch(formIsDisabled(false)));
};

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FAVORITE}`)
    .then(({data}) =>
      dispatch(receiveFavoritesOffers((data.map((el) => adaptToServer(el))))))
);

export const updateOffers = (id, status) => (dispatch, _getState, api) => (
  api.post(`${`${APIRoute.FAVORITE}`}/${id}/${Number(status)}`)
    .then(({data}) => dispatch(updateOffersList((adaptToServer(data)))))
    .catch(() => { })
);

export const updateFavorites = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(updateFavoritesList(adaptToServer(data)));
      dispatch(updateOffersList(adaptToServer(data)));
    })
    .catch(() => { })
);

export const updateSelectOffer = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(updateOffer(adaptToServer(data)));
      dispatch(updateOffersList(adaptToServer(data)));
    })
    .catch(() => { })
);

export const updateNearOffers = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.NEAROFFERS}/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(updateNearOffersList(adaptToServer(data)));
      dispatch(updateOffersList(adaptToServer(data)));
    })
    .catch(() => { })
);

export const checkAuthStatus = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.LOGIN}`)
    .then(({data}) => dispatch(setAuthInfo(adaptAuthInfoToClient(data))))
  .catch(() => { })
);

export const login = ({login: email, password, avatarUrl}) => (dispatch, _getState, api) => {
  return api.post(`${APIRoute.LOGIN}`, {email, password, avatarUrl})
    .then(() => dispatch(setAuthInfo({email, password, avatarUrl})))
  .then(() => dispatch(redirectToRoute(`${AppRoute.MAIN}`)));
};

export const logout = ({email, password, avatarUrl}) => (dispatch, _getState, api) => {
  return api.get(`/logout`, {email, password, avatarUrl})
    .then(() => {
      dispatch(setAuthInfo(null));
      dispatch(redirectToRoute(`${AppRoute.MAIN}`));
    })
    .catch(() => { });
};

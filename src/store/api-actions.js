import {adaptToServer, adaptReviewsToClient, adaptAuthInfoToClient} from "../common";
import {ActionCreator} from "../store/actions";
import {AuthorizationStatus} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => ( //  асинхронный action
  api.get(`/hotels`)
    .then((response) =>
      response.data.map((offer) => adaptToServer(offer)))
    .then((data) => {
      return dispatch(ActionCreator.receiveOffers(data));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then((response) =>
      response.data.map((review) => adaptReviewsToClient(review)))
    .then((data) =>
      dispatch(ActionCreator.receiveReviews(data)))
);

export const fetchNearOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then((response) =>
      response.data.map((offer) => adaptToServer(offer)))
    .then((data) =>
      dispatch(ActionCreator.receiveNearOffersList(data)))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then((response) =>
      response.data.map((offer) => adaptToServer(offer)))
    .then((data) =>
      dispatch(ActionCreator.receiveFavoriteOffers(data)))
);

export const checkAuthStatus = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.receiveAuthorizationStatus(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password, avatarUrl}) => (dispatch, _getState, api) => {
  return api.post(`/login`, {email, password, avatarUrl})
    // .then(() => dispatch(ActionCreator.receiveAuthorizationStatus(adaptAuthInfoToClient(AuthorizationStatus.AUTH))))
    .then(() => dispatch(ActionCreator.setAuthInfo(adaptAuthInfoToClient({email, password, avatarUrl}))));
  // .then(() => dispatch(ActionCreator.redirectToRoute(`/`)));
};

// dispatch(ActionCreator.redirectToRoute(`/`));

export const logout = ({email, password, avatarUrl}) => (dispatch, _getState, api) => {
  return api.get(`/logout`, {email, password, avatarUrl})
    .then(() => dispatch(ActionCreator.setAuthInfo({password: ``, email: ``, avatarUrl: ``})));
  // .then(() => dispatch(ActionCreator.receiveAuthorizationStatus(AuthorizationStatus.NO_AUTH)));
};


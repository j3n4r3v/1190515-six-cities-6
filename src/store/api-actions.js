import {adaptToServer, adaptReviewsToClient, adaptAuthInfoToClient} from "../common";
import {ActionCreator} from "../store/actions";

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
    .then((status) => dispatch(ActionCreator.receiveAuthorizationStatus(adaptAuthInfoToClient(status))))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((status) => dispatch(ActionCreator.receiveAuthorizationStatus(adaptAuthInfoToClient(status))))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);
// Login – если пользователь не авторизован, в action мы будем сообщать email / password.
// Для этого нужно будет сделать post запрос на / login с паролем + логином и обработать результат.

export const logout = ({login: email, password}) => (dispatch, _getState, api) => (
  api.get(`/logout`, {email, password})
    .then(() => dispatch(ActionCreator.receiveAuthorizationStatus(null)))
);

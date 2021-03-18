import {adaptToServer, adaptReviewsToClient} from "../common";
import {ActionCreator} from "../store/action";
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

// export const fetchReviews = (id) => (dispatch, _getState, api) => (
//   api.get(`/comments/${id}`)
//     .then(({data}) => dispatch(ActionCreator.receiveReviews(data.map(adaptReviewsToClient))))
// );

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

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

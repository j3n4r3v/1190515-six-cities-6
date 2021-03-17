import ActionCreator from "../store/action";
// import {AuthorizationStatus} from "../const";
import {adaptToServer} from "../common";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/`)
    .then(({data}) => dispatch(ActionCreator.changeOffers(data.map(adaptToServer))))
);

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(`/login`)
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch(() => { })
// );

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(`/login`, {email, password})
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
// );

// export const fetchNearOffersList = (id) => (dispatch, _getState, api) => (
//   api.get(`/offers/${id}`)
//     .then(({data}) => dispatch(ActionCreator.changeNearOffers(data.map(adaptToServer))))
// );

// export const fetchReviews = (id) => (dispatch, _getState, api) => (
//   api.get(`/comments/${id}`)
//     .then(({data}) => dispatch(ActionCreator.changeReviews(data.map(adaptToServer))))
// );

// export const fetchFavorites = () => (dispatch, _getState, api) => (
//   api.get(`/favorite`)
//     .then(({data}) => dispatch(ActionCreator.changeFavorite(data.map(adaptToServer))))
// );

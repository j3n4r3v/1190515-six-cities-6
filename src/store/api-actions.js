import {ActionCreator} from "../store/action";
// import {AuthorizationStatus} from "../const";
// import {adaptToServer} from "../common";

export const fetchOffersList = () => (dispatch, _getState, api) => ( //  асинхронный action
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.changeOffers(data)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.changeReviews(data)))
);

export const fetchNearOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/:${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.changeNearOffersList(data)))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.changeFavoriteOffer(data)))
);

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(`/login`)
//     .then(() => dispatch(ActionCreator.(AuthorizationStatus.AUTH)))
//     .catch(() => { })
// );

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(`/login`, {email, password})
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
// );

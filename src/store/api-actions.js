import {adaptToServer, adaptReviewsToClient, adaptAuthInfoToClient} from "../common";
import {ActionCreator} from "../store/actions";
import {AuthorizationStatus} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then((response) =>
      response.data.map((offer) => adaptToServer(offer)))
    .then((data) => {
      return dispatch(ActionCreator.receiveOffers(data));
    })
);

export const fetchPropertyInfo = (id) => (dispatch, _getState, api) => {
  Promise.all([
    api.get(`/hotels/${id}`),
    api.get(`/hotels/${id}/nearby`),
    api.get(`comments/${id}`)
  ])
    .then(([offer, nearOffers, reviews]) => {
      dispatch(ActionCreator.setOffer(adaptToServer(offer.data)));
      dispatch(ActionCreator.receiveNearOffersList(nearOffers.data.map(adaptToServer)));
      dispatch(ActionCreator.receiveReviewsList(reviews.data.map(adaptReviewsToClient)));
    })
    .then(() => dispatch(ActionCreator.propertyInfoIsLoaded(true)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(`/not-found`)));
};

export const addComment = (comment, id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.formIsDisabled(true));
  api.post(`comments/${id}`, comment)
    .then(({data}) => dispatch(ActionCreator.receiveReviewsList(data.map(adaptReviewsToClient))))
    .catch(() => dispatch(ActionCreator.formIsError(true)))
    .finally(() => dispatch(ActionCreator.formIsDisabled(false)));
};

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then((response) =>
      dispatch(ActionCreator.receiveFavoriteOffers((response.data.map((el) => adaptToServer(el))))))
);

export const checkAuthStatus = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => {
      dispatch(ActionCreator.receiveAuthorizationStatus(AuthorizationStatus.NO_AUTH));
      dispatch(ActionCreator.setAuthInfo(null));
    })
    .catch(() => { })
);

// export const checkAuthStatus = ({ login: email, password, avatarUrl }) => (dispatch, _getState, api) => (
//   api.get(`/login`, { email, password, avatarUrl })
//     .then(() => {
//       dispatch(ActionCreator.receiveAuthorizationStatus());
//       dispatch(ActionCreator.setAuthInfo({ email, password, avatarUrl }));
//     })
//     .catch(() => { })
// );

export const login = ({login: email, password, avatarUrl}) => (dispatch, _getState, api) => {
  return api.post(`/login`, {email, password, avatarUrl})
    .then(() => {
      dispatch(ActionCreator.receiveAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setAuthInfo({email, password, avatarUrl}));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)));
};

export const logout = ({email, password, avatarUrl}) => (dispatch, _getState, api) => {
  return api.get(`/logout`, {email, password, avatarUrl})
    .then(() => dispatch(ActionCreator.receiveAuthorizationStatus(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(ActionCreator.setAuthInfo(null)));
};

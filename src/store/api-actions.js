import {adaptToServer, adaptReviewsToClient, adaptAuthInfoToClient} from "../common";
import {
  receiveOffers,
  setOffer,
  receiveNearOffersList,
  receiveReviewsList,
  receiveFavoriteOffers,
  propertyInfoIsLoaded,
  redirectToRoute,
  formIsDisabled,
  formIsError,
  setAuthInfo

} from "../store/actions";
// import {AuthorizationStatus} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then((response) =>
      response.data.map((offer) => adaptToServer(offer)))
    .then((data) => {
      return dispatch(receiveOffers(data));
    })
);

export const fetchPropertyInfo = (id) => (dispatch, _getState, api) => {
  Promise.all([
    api.get(`/hotels/${id}`),
    api.get(`/hotels/${id}/nearby`),
    api.get(`comments/${id}`)
  ])
    .then(([offer, nearOffers, reviews]) => {
      dispatch(setOffer(adaptToServer(offer.data)));
      dispatch(receiveNearOffersList(nearOffers.data.map(adaptToServer)));
      dispatch(receiveReviewsList(reviews.data.map(adaptReviewsToClient)));
    })
    .then(() => dispatch(propertyInfoIsLoaded(true)))
    .catch(() => dispatch(redirectToRoute(`/not-found`)));
};

export const addComment = (comment, id) => (dispatch, _getState, api) => {
  dispatch(formIsDisabled(true));
  api.post(`comments/${id}`, comment)
    .then(({data}) => dispatch(receiveReviewsList(data.map(adaptReviewsToClient))))
    .catch(() => dispatch(formIsError(true)))
    .finally(() => dispatch(formIsDisabled(false)));
};

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then((response) =>
      dispatch(receiveFavoriteOffers((response.data.map((el) => adaptToServer(el))))))
);

export const checkAuthStatus = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => dispatch(setAuthInfo(adaptAuthInfoToClient(response.data))))
    // .then((status) => dispatch(ActionCreator.receiveAuthorizationStatus(status)))
    // не могу понять как связать получение AuthorizationStatus из store без изменения?
    .catch(() => { })
);

export const login = ({login: email, password, avatarUrl}) => (dispatch, _getState, api) => {
  return api.post(`/login`, {email, password, avatarUrl})
    .then(() => {
      // dispatch(ActionCreator.receiveAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(setAuthInfo({email, password, avatarUrl}));
    })
    .then(() => dispatch(redirectToRoute(`/`)));
};

export const logout = ({email, password, avatarUrl}) => (dispatch, _getState, api) => {
  return api.get(`/logout`, {email, password, avatarUrl})
    // .then(() => dispatch(ActionCreator.receiveAuthorizationStatus(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(setAuthInfo(null)));
};

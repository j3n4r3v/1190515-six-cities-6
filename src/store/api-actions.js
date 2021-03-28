import {adaptToServer, adaptReviewsToClient, adaptAuthInfoToClient} from "../common";
import {
  receiveOffers,
  receiveOffer,
  receiveNearOffers,
  receiveReviews,
  receiveFavoritesOffers,
  propertyInfoIsLoaded,
  redirectToRoute,
  formIsDisabled,
  formIsError,
  addAuthInfo,
  updateFavoritesList,
  updateOffersList,
  updateOffer,
  updateNearOffersList
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
      dispatch(receiveOffer(adaptToServer(offer.data)));
      dispatch(receiveNearOffers(nearOffers.data.map(adaptToServer)));
      dispatch(receiveReviews(reviews.data.map(adaptReviewsToClient)));
    })
    .then(() => dispatch(propertyInfoIsLoaded(true)))
    .catch(() => dispatch(redirectToRoute(`/not-found`)));
};

export const addComment = (comment, id) => (dispatch, _getState, api) => {
  dispatch(formIsDisabled(true));
  api.post(`comments/${id}`, comment)
    .then(({data}) => dispatch(receiveReviews(data.map(adaptReviewsToClient))))
    .catch(() => dispatch(formIsError(true)))
    .finally(() => dispatch(formIsDisabled(false)));
};

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then((response) =>
      dispatch(receiveFavoritesOffers((response.data.map((el) => adaptToServer(el))))))
);

export const updateOffers = (id, status) => (dispatch, _getState, api) => (
  api.post(`${`/favorite`}/${id}/${Number(status)}`)
    .then(({data}) => dispatch(updateOffersList((adaptToServer(data)))))
    .catch(() => { })
);

export const updateFavorites = (id, status) => (dispatch, _getState, api) => (
  api.post(`${`/favorite`}/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(updateFavoritesList(adaptToServer(data)));
      dispatch(updateOffersList(adaptToServer(data)));
    })
    .catch(() => { })
);

export const updateCheckOffer = (id, status) => (dispatch, _getState, api) => (
  api.post(`${`/favorite`}/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(updateOffer(adaptToServer(data)));
      dispatch(updateOffersList(adaptToServer(data)));
    })
    .catch(() => { })
);

export const updateNearOffers = (id, status) => (dispatch, _getState, api) => (
  api.post(`${`/favorite`}/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(updateNearOffersList(adaptToServer(data)));
      dispatch(updateOffersList(adaptToServer(data)));
    })
    .catch(() => { })
);

export const checkAuthStatus = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => dispatch(addAuthInfo(adaptAuthInfoToClient(response.data))))
    // .then((status) => dispatch(ActionCreator.receiveAuthorizationStatus(status)))
    // не могу понять как связать получение AuthorizationStatus из store без изменения?
    .catch(() => { })
);

export const login = ({login: email, password, avatarUrl}) => (dispatch, _getState, api) => {
  return api.post(`/login`, {email, password, avatarUrl})
    .then(() => {
      // dispatch(ActionCreator.receiveAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(addAuthInfo({email, password, avatarUrl}));
    })
    .then(() => dispatch(redirectToRoute(`/`)));
};

export const logout = ({email, password, avatarUrl}) => (dispatch, _getState, api) => {
  return api.get(`/logout`, {email, password, avatarUrl})
    // .then(() => dispatch(ActionCreator.receiveAuthorizationStatus(AuthorizationStatus.NO_AUTH)))
    .then(() => {
      dispatch(addAuthInfo(null));
      dispatch(redirectToRoute(`/`));
    })
    .catch(() => { });
};

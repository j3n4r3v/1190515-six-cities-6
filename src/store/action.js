export const ActionType = {
  ACTIVE_CITY: `main/activeCity`,
  CHANGE_ACTIVE_SORT_TYPE: `main/changeActiveSortType`,
  RECEIVE_OFFERS: `main/receiveOffers`,
  RECEIVE_REVIEWS: `property/receiveReviews`,
  RECEIVE_NEAR_OFFERS_LIST: `property/receiveNearOffersList`,
  RECEIVE_FAVORITE_OFFERS: `favorite/receiveFavoriteOffers`,
  // IS_NEAR_OFFERS_LOADED: `property/isNearOffersLoaded`,
  // CHANGE_FAVORITE_OFFER: `favorite/changeFavoriteOffer`,
  RECEIVE_AUTHSTATUS: `user/receiveAuthStatus`
};

export const ActionCreator = { // Для описания actions в виде обьектов
  changeCity: (city) => ({
    type: ActionType.ACTIVE_CITY,
    payload: city
  }),
  changeActiveSortType: (option) => ({
    type: ActionType.CHANGE_ACTIVE_SORT_TYPE,
    payload: option
  }),
  receiveOffers: (data) => ({
    type: ActionType.RECEIVE_OFFERS,
    payload: data
  }),
  receiveReviews: (data) => ({
    type: ActionType.RECEIVE_REVIEWS,
    payload: data
  }),
  receiveNearOffersList: (list) => ({
    type: ActionType.RECEIVE_NEAR_OFFERS_LIST,
    payload: list
  }),
  // isNearOffersLoaded: () => ({
  //   type: ActionType.IS_NEARBY_OFFERS_LOADED
  // }),
  receiveFavoriteOffers: (data) => ({
    type: ActionType.RECEIVE_FAVORITE_OFFERS,
    payload: data
  }),
  // changeFavoriteOffer: (data) => ({
  //   type: ActionType.CHANGE_FAVORITE_OFFER,
  //   payload: data
  // }),
  receiveAuthStatus: (status) => ({
    type: ActionType.RECEIVE_AUTHSTATUS,
    payload: status
  })
};

export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_ACTIVE_SORT_TYPE: `main/changeActiveSortType`,
  RECEIVE_OFFERS: `main/changeOffers`,
  RECEIVE_REVIEWS: `property/changeReviews`,
  RECEIVE_NEAR_OFFERS_LIST: `property/changeNearOffersList`,
  RECEIVE_FAVORITES: `favorite/receiveFavorites`,
  // CHANGE_FAVORITE_OFFER: `favorite/changeFavoriteOffer`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`
};

export const ActionCreator = { // Для описания actions в виде обьектов
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
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
  receiveFavorites: (data) => ({
    type: ActionType.RECEIVE_FAVORITES,
    payload: data
  }),
  // changeFavoriteOffer: (data) => ({
  //   type: ActionType.CHANGE_FAVORITE_OFFER,
  //   payload: data
  // }),
  requireAuthorization: (status) => ({
    type: ActionType.CHANGE_REQUIRE_AUTHORIZATION,
    payload: status
  })
};

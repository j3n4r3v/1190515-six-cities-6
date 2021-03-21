import {ActionType} from "./actions";
import {CITIES, SortType, AuthorizationStatus} from "../const";

const initialState = { // В глобальном хранилище начальное state(состояние)
  activeCity: CITIES[3],
  activeOption: SortType[0],
  offers: [],
  reviews: [],
  nearOffers: [],
  favorites: [],
  // isFavorite: false,
  isOffersLoaded: false,
  isFavoritesLoaded: false,
  isNearOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {password: ``, email: ``, avatarUrl: ``}
};

const reducer = (state = initialState, action) => { // логика изменения хранилища
  switch (action.type) {
    case ActionType.ACTIVE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    case ActionType.CHANGE_ACTIVE_SORT_TYPE:
      return {
        ...state,
        activeOption: action.payload
      };
    case ActionType.RECEIVE_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOffersLoaded: true
      };
    case ActionType.RECEIVE_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case ActionType.RECEIVE_NEAR_OFFERS_LIST:
      return {
        ...state,
        nearOffers: action.payload,
        isNearOffersLoaded: true
      };
    // case ActionType.IS_NEAR_OFFERS_LOADED:
    //   return {
    //     ...state,
    //     isNearOffersLoaded: false
    //   };
    case ActionType.RECEIVE_FAVORITE_OFFERS:
      return {
        ...state,
        favorites: action.payload,
        isFavoritesLoaded: true
      };
      // case ActionType.CHANGE_FAVORITE_OFFER:
      //   return {
      //     ...state,
      //     isFavorite: action.payload
      //   };
    case ActionType.RECEIVE_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_AUTHORIZATION_INFO:
      return {
        ...state,
        authInfo: action.payload
      };

    default:
      return state;
  }
};

export {reducer};

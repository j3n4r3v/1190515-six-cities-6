import {ActionType} from "./actions";
import {CITIES, SortType, AuthorizationStatus} from "../const";

const initialState = { // В глобальном хранилище начальное state(состояние)
  activeCity: CITIES[3],
  activeOption: SortType[0],
  offers: [],
  isDataLoaded: false,
  reviews: [],
  isFormDisabled: false,
  isFormError: false,
  offer: {},
  nearOffers: [],
  favorites: [],
  propertyInfoIsLoaded: false,
  url: null,
  // isFavorite: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null
};

const reducer = (state = initialState, action) => { // логика изменения хранилища
  switch (action.type) {
    case ActionType.ACTIVE_CITY:
      return {
        ...state, activeCity: action.payload
      };
    case ActionType.CHANGE_ACTIVE_SORT_TYPE:
      return {
        ...state, activeOption: action.payload
      };
    case ActionType.SCREEN_IS_LOADED:
      return {
        ...state, propertyInfoIsLoaded: true
      };
    case ActionType.RECEIVE_OFFERS:
      return {
        ...state, offers: action.payload, isDataLoaded: true
      };
    case ActionType.SET_OFFER:
      return {
        ...state, offer: action.payload, isDataLoaded: true
      };
    case ActionType.RECEIVE_REVIEWS:
      return {
        ...state, reviews: action.payload, isDataLoaded: true
      };
    case ActionType.RECEIVE_NEAR_OFFERS_LIST:
      return {
        ...state, nearOffers: action.payload, isDataLoaded: true
      };
    case ActionType.RECEIVE_FAVORITE_OFFERS:
      return {
        ...state, favorites: action.payload, isDataLoaded: true
      };
    // case ActionType.CHANGE_FAVORITE_OFFER:
    //   return {
    //     ...state,
    //     isFavorite: action.payload
    //   };
    case ActionType.RECEIVE_AUTHORIZATION_STATUS:
      return {
        ...state, authorizationStatus: action.payload
      };
    case ActionType.SET_AUTHORIZATION_INFO:
      return {
        ...state, authInfo: action.payload
      };
    case ActionType.FORM_IS_DISABLED:
      return {
        ...state, isFormDisabled: action.payload
      };
    case ActionType.FORM_IS_ERROR:
      return {
        ...state, isFormError: action.payload
      };
    case ActionType.REDIRECT_TO_ROUTE:
      return {
        ...state, url: action.payload
      };
    default:
      return state;
  }
};

export {reducer};

import {ActionType} from "./action";
import {CITIES, SortType} from "../const";
// import {offersMocks} from "../mocks/offers-mocks";
import {AuthorizationStatus} from "../const";

const initialState = { // В глобальном хранилище начальное state(состояние)
  activeCity: CITIES[3],
  activeOption: SortType[0],
  offers: [],
  reviews: [],
  nearOffers: [],
  // isFavorite: false,
  isOffersLoaded: false,
  // isFavoritesLoaded: false,
  isNearOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const reducer = (state = initialState, action) => { // логика изменения хранилища
  switch (action.type) {
    case ActionType.CHANGE_CITY:
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
    case ActionType.RECEIVE_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };
      // case ActionType.CHANGE_FAVORITE_OFFER:
      //   return {
      //     ...state,
      //     isFavorite: action.payload
      //   };

    default:
      return state;
  }
};

export {reducer};

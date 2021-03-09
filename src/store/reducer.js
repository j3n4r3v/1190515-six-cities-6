import {ActionType} from "./action";
import {CITIES, SortType} from "../const";
import {offersMocks} from "../mocks/offers-mocks";

const initialState = { // В глобальном хранилище начальное state(состояние)
  activeCity: CITIES[3],
  activeSortType: SortType.POPULAR,
  activeCityId: null, // DEFAULT_CITY_ID   -   1 ?
  offers: offersMocks
};

const reducer = (state = initialState, action) => { // логика изменения хранилища
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        activeSortType: action.payload
      };
    case ActionType.CHANGE_ACTIVE_ID_CITY:
      return {
        ...state,
        activeCityId: action.payload
      };
    default:
      return state;
  }
};

export {reducer};

import {ActionType} from "./action";

import {offersMocks} from "../mocks/offers-mocks";

// import {CITIES} from "../../const";
// const ACTIVE_CITY = CITIES[3];

const initialState = { // В глобальном хранилище начальное state(состояние)
  activeCity: `Amsterdam`,
  offers: offersMocks
};

const reducer = (state = initialState, action) => { // логика изменения хранилища
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state, // предыдущее состояние копирует
        activeCity: action.payload // меняет в state ключ activeCity - на выбранный город
        // offers: action.filter // меняет в state ключ activeOffers- на отфильтрованные предложения
      };
    default:
      return state;
  }
};

export {reducer}; // возвращает  измененное состояние хранилища

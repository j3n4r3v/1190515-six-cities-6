import {ActionType} from "../store/action";

import {offersMocks} from "../mocks/offers-mocks";
import {CITIES} from "../const";

const ACTIVE_CITY = CITIES[3];
const filterOffers = offersMocks.filter((offer) => {
  return offer.city.name === ACTIVE_CITY;
});

const initialState = {
  city: `Paris`,
  offers: filterOffers, // уже отфильтрованные предложения
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state, // предыдущее состояние копирует
        city: action.city // меняет в нем ключ city - на выбранный город
      };
    case ActionType.FILTERED_OFFERS:
      return {
        ...state, // предыдущее состояние копирует
        offers: action.offers // меняет в нем ключ offers- на выбранный город
      };
    default:
      return state;
  }
};

export {reducer}; // возвращает состояние - а это измененный обьект initialState?

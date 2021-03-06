import {offersMocks} from "../../mocks/offers-mocks";
import {CITIES} from "../../const";

const ACTIVE_CITY = CITIES[3];
const filterCityOffers = offersMocks.filter((offer) => {
  return offer.city.name === ACTIVE_CITY;
});

const initialState = {
  city: `Paris`,
  offers: filterCityOffers, // уже отфильтрованные предложения
};


const CHANGE_CITY = `CHANGE_CITY`;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state, // предыдущее состояние копирует
        city: action.name // меняет в нем ключ city - на выбранный город
      };
    default:
      return state;
  }
};

export {reducer}; // возвращает состояние - а это измененный обьект initialState?

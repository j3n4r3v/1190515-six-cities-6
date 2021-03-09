import {SortType} from "./const";

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

export const SortOffers = {
  [SortType.POPULAR]: (offers) => offers,
  [SortType.TOP_RATED_FIRST]: (offers) => offers.slice().sort((a, b) => b.rate - a.rate),
  [SortType.LOW_TO_HIGH]: (offers) => offers.slice().sort((a, b) => a.price - b.price),
  [SortType.HIGH_TO_LOW]: (offers) => offers.slice().sort((a, b) => b.price - a.price),
};

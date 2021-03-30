import { createReducer } from "@reduxjs/toolkit";
import { changeCity, changeActiveSortType, receiveOffers, updateOffersList } from "../actions";

const initialState = {
  activeCity: `Paris`,
  activeOption: `Popular`,
  offers: [],
  isDataLoaded: false
};

const mainData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeActiveSortType, (state, action) => {
      state.activeOption = action.payload;
    })
    .addCase(receiveOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(updateOffersList, (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [
        ...state.offers.slice(0, index),
        action.payload,
        ...state.offers.slice(index + 1)
      ];
    });
});

export { mainData };

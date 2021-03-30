import {createReducer} from "@reduxjs/toolkit";
import {
  receiveNearOffers,
  receiveReviews,
  receiveOffer,
  propertySetIsLoaded,
  formIsDisabled,
  updateOffer,
  updateNearOffersList
} from "../actions";

const initialState = {
  offer: {},
  nearOffers: [],
  reviews: [],
  isPropertySetLoaded: false,
  isFormDisabled: false,
};

const propertyData = createReducer(initialState, (builder) => {
  builder
    .addCase(receiveNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(receiveReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(receiveOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(formIsDisabled, (state, action) => {
      state.isFormDisabled = action.payload;
    })
    .addCase(propertySetIsLoaded, (state, action) => {
      state.isPropertySetLoaded = action.payload;
    })
    .addCase(updateOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(updateNearOffersList, (state, action) => {
      const index = state.nearOffers.findIndex((offer) => offer.id === action.payload.id);
      state.nearOffers = [
        ...state.nearOffers.slice(0, index),
        action.payload,
        ...state.nearOffers.slice(index + 1)
      ];
    });
});

export {propertyData};

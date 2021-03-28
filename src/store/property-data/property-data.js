import {createReducer} from '@reduxjs/toolkit';
import {
  receiveNearOffers,
  receiveReviews,
  receiveOffer,
  propertyInfoIsLoaded,
  formIsError,
  formIsDisabled,
  updateOffer,
  updateNearOffersList
} from "../actions";

const initialState = {
  offer: {},
  nearOffers: [],
  reviews: [],
  propertyInfoIsLoaded: false,
  isFormDisabled: false,
  isFormError: false,
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
    .addCase(formIsError, (state, action) => {
      state.isFormError = action.payload;
    })
    .addCase(propertyInfoIsLoaded, (state, action) => {
      state.propertyInfoIsLoaded = action.payload;
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

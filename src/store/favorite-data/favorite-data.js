import {createReducer} from "@reduxjs/toolkit";
import {updateFavoritesList, receiveFavoritesOffers} from "../actions";

const initialState = {
  favorites: [],
  isFavoritesLoaded: false
};

const favoriteData = createReducer(initialState, (builder) => {
  builder
    .addCase(receiveFavoritesOffers, (state, action) => {
      state.favorites = action.payload;
      state.isFavoritesLoaded = true;
    })
    .addCase(updateFavoritesList, (state, action) => {
      const index = state.favorites.findIndex((favorite) => favorite.id === action.payload.id);
      state.favorites = [
        ...state.favorites.slice(0, index),
        ...state.favorites.slice(index + 1)
      ];
    });
});

export {favoriteData};

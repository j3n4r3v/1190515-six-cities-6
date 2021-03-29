import {createReducer} from "@reduxjs/toolkit";
import {setAuthInfo, redirectToRoute} from "../actions";

const initialState = {
  authInfo: null,
  url: null
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthInfo, (state, action) => {
      state.authInfo = action.payload;
    })
    .addCase(redirectToRoute, (state, action) => {
      state.url = action.payload;
    });
});

export {userData};

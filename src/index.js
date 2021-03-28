import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import { createAPI } from "./api";

import { Provider } from "react-redux";

import { setAuthInfo } from "./store/actions";
import { reducer } from "./store/reducer";
import { fetchOffersList, checkAuthStatus } from "./store/api-actions";
import { redirect } from "./store/redirect";

import { configureStore } from '@reduxjs/toolkit';

const api = createAPI(
  () => store.dispatch(setAuthInfo(null))
);
// createAPI принимает callback который нужно вызвать на случай неавторизованности, обновит store

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: api
      }
    })
      .concat(redirect)
});
store.dispatch(checkAuthStatus());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);

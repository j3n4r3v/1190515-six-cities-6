import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import {createAPI} from "./api";

import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {reducer} from "./store/reducer";

import {fetchOffersList} from "./store/api-actions";

const api = createAPI();

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)
        )
    ));

store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

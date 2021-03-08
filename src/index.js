import React from "react";
import ReactDOM from "react-dom";

import {offersMocks} from "./mocks/offers-mocks";

import App from "./components/app/app";

import {composeWithDevTools} from "redux-devtools-extension";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offersMocks}
      >
      </App>
    </Provider>,
    document.querySelector(`#root`)
);

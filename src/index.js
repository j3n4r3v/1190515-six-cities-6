import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import {createAPI} from "./api";

import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {setAuthInfo} from "./store/actions";
import {reducer} from "./store/reducer";
import {fetchOffersList, checkAuthStatus} from "./store/api-actions";
import {redirect} from "./store/redirect";

// import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(setAuthInfo(null))
);
// createAPI принимает callback который нужно вызвать на случай неавторизованности, обновит store

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    ));

store.dispatch(checkAuthStatus());
store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

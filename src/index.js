import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import {createAPI} from "./api";

import {ActionCreator} from "./store/action";

import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {reducer} from "./store/reducer";

import {fetchOffersList, checkAuthStatus} from "./store/api-actions";

const api = createAPI(
    () => store.dispatch(ActionCreator.receiveAuthStatus(status)) // иначе можно как-то записать тут?
);
// createAPI принимает callback который нужно вызвать на случай неавторизованности
// обновит store - authStatus: true

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)
        )
    ));

store.dispatch(checkAuthStatus()); // посылаем запрос (aсинхронный action - вызов функции)
store.dispatch(fetchOffersList()); // на сервер и обрабатываем ответ?

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

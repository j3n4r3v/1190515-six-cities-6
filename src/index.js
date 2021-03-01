import React from "react";
import ReactDOM from "react-dom";

import {offersMocks} from "./mocks/offers-mocks";

import App from "./components/app/app";

ReactDOM.render(
    <App
      offers={offersMocks}
    >
    </App>,
    document.querySelector(`#root`)
);

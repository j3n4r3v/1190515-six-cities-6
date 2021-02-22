import React from "react";
import ReactDOM from "react-dom";

import {cardsMocks} from "./mocks/cards-mocks";

import App from "./components/app/app";

ReactDOM.render(
    <App
      cards={cardsMocks}
    >
    </App>,
    document.querySelector(`#root`)
);

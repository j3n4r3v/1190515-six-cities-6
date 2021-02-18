import React from "react";
import ReactDOM from "react-dom";

import {offers} from "./mocks/offers-mocks";
import {comments} from "./mocks/comments-mocks";

import App from "./components/app/app";

ReactDOM.render(
    <App
      offers={offers}
      comments={comments}
    >
    </App>,
    document.querySelector(`#root`)
);

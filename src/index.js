import React from "react";
import ReactDOM from "react-dom";

import {offers} from "./mocks/offers-mocks";
import {comments} from "./mocks/comments-mocks";

import App from "./components/app/app";

ReactDOM.render(
    <App cardsAddress={[`apartment-01`, `room`, `apartment-02`, `apartment-03`, `room`]}
      offers = {offers}
      comments={comments}
    />,
    document.querySelector(`#root`)
);

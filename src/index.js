import React from "react";
import ReactDOM from "react-dom";

import {cardsMocks} from "./mocks/cards-mocks";
import {commentsMocks} from "./mocks/comments-mocks";

import App from "./components/app/app";

ReactDOM.render(
    <App
      cards={cardsMocks}
      comments={commentsMocks}
    >
    </App>,
    document.querySelector(`#root`)
);

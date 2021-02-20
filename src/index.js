import React from "react";
import ReactDOM from "react-dom";

import {cards} from "./mocks/cards-mocks";
import {comments} from "./mocks/comments-mocks";

import App from "./components/app/app";

ReactDOM.render(
    <App
      cards={cards}
      comments={comments}
    >
    </App>,
    document.querySelector(`#root`)
);

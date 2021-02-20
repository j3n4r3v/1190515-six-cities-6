import React from "react";
import ReactDOM from "react-dom";

import {cardsMock} from "./mocks/cards-mocks";
import {comments} from "./mocks/comments-mocks";

import App from "./components/app/app";

ReactDOM.render(
    <App
      cards={cardsMock}
      comments={comments}
    >
    </App>,
    document.querySelector(`#root`)
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

ReactDOM.render(
    <App cardsAddress={[`apartment-01`, `room`, `apartment-02`, `apartment-03`, `room`]}/>,
    document.querySelector(`#root`)
);

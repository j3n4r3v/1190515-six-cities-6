import React from "react";
import {Link} from "react-router-dom";

import withError from "../hocs/with-error";

const NotFoundScreen = () => {

  return <React.Fragment>
    <h1>
      <br />
      404 Not Found
    </h1>
    <Link to="/">Go to Main Page</Link>
  </React.Fragment>;
};

export {NotFoundScreen};
export default withError(NotFoundScreen);


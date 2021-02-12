import React from "react";
import {Link} from 'react-router-dom';

const NotFoundScreen = () => {
  return <React.Fragment>
    <h1>
      <br />
      404 Not Found
    </h1>
    <Link to="/">Go to Main Page
    </Link>
  </React.Fragment>;
};

export default NotFoundScreen;

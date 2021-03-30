import React from "react";

import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import {useSelector} from "react-redux";

import {Redirect} from "react-router-dom";

import {AppRoute} from "../../const";

const PrivateRoute = ({render, path, exact}) => {

  const {authInfo} = useSelector((state) => state.USER);

  return (
    <Route
      path={path}
      exact={exact}
    > { authInfo && render() // тернарный оператор или через && ?
        || <Redirect to={`${AppRoute.LOGIN}`} />
      }
    </Route>
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string,
  render: PropTypes.func,
};

export default PrivateRoute;


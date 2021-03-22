import React from "react";

import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../const";

const PrivateRoute = ({render, path, exact, authorizationStatus, noAuth}) => {

  return (
    <Route
      path={path}
      exact={exact}
    > { authorizationStatus === AuthorizationStatus.AUTH
        ? render()
        : noAuth()
      }
    </Route>
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string,
  exact: PropTypes.bool,
  path: PropTypes.string,
  render: PropTypes.func,
  noAuth: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.authorizationStatus
  };
};

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);

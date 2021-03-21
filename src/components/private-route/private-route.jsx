import React from "react";

import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../const";

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {

  return (
    <Route
      path={path}
      exact={exact}
    > { authorizationStatus === AuthorizationStatus.AUTH
        ? render()
        : <Redirect to={`/login`} />
      }
    </Route>
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.object,
  exact: PropTypes.bool,
  path: PropTypes.string,
  render: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.authorizationStatus
  };
};

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);

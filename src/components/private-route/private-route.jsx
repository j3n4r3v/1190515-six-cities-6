import React from "react";

import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../const";

const PrivateRoute = ({render, path, exact, onLogin}) => {

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          onLogin === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  onLogin: PropTypes.string,
  exact: PropTypes.bool,
  path: PropTypes.string,
  render: PropTypes.func
};

const mapStateToProps = (state) => ({
  onLogin: state.authorizationStatus
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);

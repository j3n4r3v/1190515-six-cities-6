import React from "react";

import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import {Redirect} from "react-router-dom";

const PrivateRoute = ({render, path, exact, authInfo}) => {

  return (
    <Route
      path={path}
      exact={exact}
    > { authInfo && render()
        || <Redirect to="/login" />
      }
    </Route>
  );
};

PrivateRoute.propTypes = {
  authInfo: PropTypes.object,
  exact: PropTypes.bool,
  path: PropTypes.string,
  render: PropTypes.func,
  noAuth: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    authInfo: state.authInfo
  };
};

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);

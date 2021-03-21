import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {authPropTypes} from "../../propetypes";
import {ActionCreator} from "../../store/actions";
import {logout} from "../../store/api-actions";

// const LogoutStyles = {
//   border: `5px`,
//   marginLeft: `15px`,
//   backgroundColor: `transparent`,
//   textTransform: `uppercase`,
//   outline: `2px`
// };

const AuthInfoScreen = ({onChangePage, authorizationStatus, authInfo}) => {

  return <React.Fragment>
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active" to="/" onClick={() => onChangePage}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={authorizationStatus && `${`/favorites`}` || `${`/login`}`} className="header__nav-link header__nav-link--profile">

                  {
                    authorizationStatus && <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  }

                  <span className="header__user-name user__name">{authorizationStatus && authInfo.email || `Sign In`}</span>
                </Link>
              </li>

              {/* {authorizationStatus &&
                <li className="header__nav-item user">
                onLogout,
                onLogout: PropTypes.func,
                  <button
                    onClick={() => onLogout()}
                    style={LogoutStyles}
                    className="header__nav-link header__nav-link--profile"
                  >
                    <span className="header__user-name user__name">Logout</span>
                  </button>
                </li>
              } */}

            </ul>
          </nav>
        </div>
      </div>
    </header>
  </React.Fragment>;
};

AuthInfoScreen.propTypes = {
  onChangePage: PropTypes.func,
  onLogout: PropTypes.func,
  authorizationStatus: authPropTypes,
  authInfo: PropTypes.object
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authInfo: state.authInfo
});

const mapDispatchToProps = (dispatch) => ({
  onChangePage() {
    dispatch(ActionCreator.receiveNearOffersList());
    dispatch(ActionCreator.receiveFavoriteOffers());
  },
  onLogout() {
    dispatch(logout());
  }
});

export {AuthInfoScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AuthInfoScreen);

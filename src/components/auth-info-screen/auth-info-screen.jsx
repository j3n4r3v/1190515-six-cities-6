import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// import {authPropTypes} from "../../propetypes";

import {logout} from "../../store/api-actions";
import {authPropTypes} from "../../propetypes";

const LogoutStyles = {
  border: `5px`,
  marginLeft: `15px`,
  backgroundColor: `transparent`,
  textTransform: `uppercase`,
  outline: `2px`
};

const AuthInfoScreen = ({authInfo, onLogout, isMainPage = false}) => {

  return <React.Fragment>
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className={`header__logo-link ${isMainPage ? `header__logo-link--active` : ``}`} to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={authInfo && `${`/favorites`}` || `${`/login`}`} className="header__nav-link header__nav-link--profile">

                  {
                    authInfo && <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  }

                  <span className="header__user-name user__name">{authInfo && authInfo.email || `Sign In`}</span>
                </Link>
              </li>

              {authInfo &&
                <li className="header__nav-item user">
                  <button
                    onClick={() => onLogout(authInfo)}
                    style={LogoutStyles}
                    className="header__nav-link header__nav-link--profile">
                    <span className="header__user-name user__name">Logout</span>
                  </button>
                </li>
              }

            </ul>
          </nav>
        </div>
      </div>
    </header>
  </React.Fragment>;
};

AuthInfoScreen.propTypes = {
  onLogout: PropTypes.func,
  authInfo: authPropTypes,
  isMainPage: PropTypes.bool
};

const mapStateToProps = (state) => ({
  authInfo: state.authInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout(authInfo) {
    dispatch(logout(authInfo));
  }
});

export {AuthInfoScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AuthInfoScreen);

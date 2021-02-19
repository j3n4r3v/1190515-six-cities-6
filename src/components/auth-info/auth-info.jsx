import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import authPropTypes from "../../propetypes";

const AuthInfo = (props) => {
  const {authInfo} = props;
  const {avatarUrl, email} = authInfo;

  return <React.Fragment>

    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src={avatarUrl} alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{email}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

  </React.Fragment>;
};

AuthInfo.propTypes = {
  authInfo: PropTypes.shape(authPropTypes)
};

export default AuthInfo;

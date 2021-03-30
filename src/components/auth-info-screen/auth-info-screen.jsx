import React from "react";
import {Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";

import {propertySetIsLoaded} from "../../store/actions";
import {logout} from "../../store/api-actions";

const LogoutStyles = {
  border: `5px`,
  marginLeft: `15px`,
  backgroundColor: `transparent`,
  textTransform: `uppercase`,
  outline: `2px`
};

const AuthInfoScreen = () => {

  const dispatch = useDispatch();
  const {authInfo} = useSelector((state) => state.USER);

  return <React.Fragment>
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link `header__logo-link--active"
              to="/"
              onClick={() => dispatch(propertySetIsLoaded(false))}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile"
                  to={authInfo && `${`/favorites`}` || `${`/login`}`}>

                  {
                    authInfo && <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    //   style={{backgroundImage: authInfo.avatarUrl}}>
                    // </div>
                  }

                  <span className="header__user-name user__name">{authInfo && authInfo.email || `Sign In`}</span>
                </Link>
              </li>

              {authInfo &&
                <li className="header__nav-item user">
                  <button
                    onClick={() => dispatch(logout(authInfo))}
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

export default AuthInfoScreen;


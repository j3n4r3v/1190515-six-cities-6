import React from "react";
import {Link} from "react-router-dom";

import PropTypes from "prop-types";
import {authPropTypes} from "../../propetypes";
import {getRandomArrayItem} from "../../utils";
import {cardsMocks} from "../../mocks/cards-mocks";
import {authInfoMocks} from "../../mocks/auth-info-mocks";
import AuthInfoScreen from "../auth-info-screen/auth-info-screen";
import FavoritesCard from "../favorites-card/favorites-card";

const FavoritesScreen = () => {
  const gerRandomCardsMock = getRandomArrayItem(cardsMocks);
  return <React.Fragment>
    <div>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">

        <AuthInfoScreen
          authInfo={authInfoMocks}
        />

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">

                    <FavoritesCard
                      card={gerRandomCardsMock} // Тут нужен конкретный обьект а не массив обьектов, как?
                    />
                    <FavoritesCard
                      card={gerRandomCardsMock}
                    />

                  </div>
                </li>
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Cologne</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">

                    <FavoritesCard
                      card={gerRandomCardsMock}
                    />

                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to="/">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
          </Link>
        </footer>
      </div>
    </div>
  </React.Fragment>;
};

FavoritesScreen.propTypes = {
  authInfo: PropTypes.arrayOf(authPropTypes)
};

export default FavoritesScreen;

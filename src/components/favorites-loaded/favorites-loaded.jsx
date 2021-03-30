import React from "react";
import {useSelector} from "react-redux";

import FavoriteList from "../favorite-list/favorite-list";

const FavoritesLoaded = () => {
  const {favorites} = useSelector((state) => state.FAVORITE);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">{favorites.length && `Saved listing` || `Nothing yet saved`}</h1>

          <FavoriteList offers={favorites} typeOffer={`FAVORITE`} />

        </section>
      </div>
    </main>
  );
};

export default FavoritesLoaded;

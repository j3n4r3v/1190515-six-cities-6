const adaptToServer = (data) => {
      "id": id,
      "comments": comments,
      "film_info": {
        "title": title,
        "alternative_title": altTitle,
        "total_rating": rating,
        "poster": poster,
        "age_rating": age,
        "director": director,
        "writers": writers,
        "actors": actors,
        "release": {
          "date": releaseDate,
          "release_country": country,
        },
        "runtime": duration,
        "genre": genres,
        "description": description,
      },
      "user_details": {
        "watchlist": isInWatchlist,
        "already_watched": isInHistory,
        "watching_date": watchingDate,
        "favorite": isInFavorites,
      }
    };

  export {adaptToServer};

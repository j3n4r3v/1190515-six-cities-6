const adaptToServer = (data) => {
  const adaptedData = Object.assign(
      {},
      data,
      {
        previewImage: data.preview_image,
        isPremium: data.is_premium,
        isFavorite: data.is_favorite,
        maxAdults: data.max_adults,
        pointsLocation: data.location,
        host: {
          ...data.host,
          avatarUrl: data.host.avatar_url,
          isPro: data.host.is_pro,
        }
      }
  );

  delete adaptedData.preview_image;
  delete adaptedData.is_premium;
  delete adaptedData.is_favorite;
  delete adaptedData.host.avatar_url;
  delete adaptedData.host.is_pro;
  delete adaptedData.max_adults;

  return adaptedData;
};

const adaptReviewsToClient = (data) => {
  const adaptedData = Object.assign(
      {},
      data,
      {
        user: {
          ...data.user,
          avatarUrl: data.user.avatar_url,
          isPro: data.user.is_pro,
        }
      }
  );

  delete adaptedData.user.avatar_url;
  delete adaptedData.user.is_pro;


  return adaptedData;
};

export {adaptToServer, adaptReviewsToClient};

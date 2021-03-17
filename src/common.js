const adaptToServer = () => {
  const adaptedData = Object.assign(
      {},
      data
      {
        previewImage: data.preview_image,
        isPremium: data.is_premium,
        isFavorite: data.is_favorite,
        maxAdults: data.max_adults,
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

export {adaptToServer};

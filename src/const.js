const OfferType = {
  APARTMENT: `Apartment`,
  PRIVATEROOM: `Private room`,
  STUDIO: `Studio`
};

const Type = {
  CITIES: {
    divClass: `cities__places-list`, // куда вставляем(контейнер)
    article: `cities__place-card`, // что вставляем, карточка
    img: {
      class: `cities`, // cities__image-wrapper обертка для изображения
      width: 260,
      height: 200
    },
    info: `place-card__info`, // информация о карточке
  },
  NEAR: {
    divClass: `near-places__list`, // куда вставляем(контейнер)
    article: `near-places__card`, // что вставляем, карточка
    img: {
      class: `near-places`, // near-places__image-wrapper  обертка для изображения
      width: 260,
      height: 200
    },
    info: `place-card__info`, // информация о карточке

  },
  FAVORITE: {
    divClass: `favorites__places`, // куда вставляем(контейнер)
    article: `favorites__card`, // что вставляем, карточка
    img: {
      class: `favorites`, // favorites__image-wrapper обертка для изображения
      width: 150,
      height: 110
    },
    info: `favorites__card-info`, // информация о карточке // куда вставляем(контейнер)
  },

};

const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export {OfferType, CITIES, Type};

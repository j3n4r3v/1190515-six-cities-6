const OfferType = {
  APARTMENT: `Apartment`,
  PRIVATEROOM: `Private room`,
  STUDIO: `Studio`
};

const Type = {
  CITY: { // нужно ли сюда вставлять строку чтобы ссылаться?
    divClass: `cities__places-list`, // куда вставляем(контейнер)
    article: `cities__place-card`, // что вставляем, карточка
    img: {
      containerClass: `cities`, // cities__image-wrapper обертка для изображения
      width: 260,
      height: 200
    },
    info: `place-card__info`, // информация о карточке
  },
  PROPERTY: {
    divClass: `near-places__list`, // куда вставляем(контейнер)
    article: `near-places__card`, // что вставляем, карточка
    img: {
      containerClass: `near-places`, // near-places__image-wrapper  обертка для изображения
      width: 260,
      height: 200
    },
    info: `place-card__info`, // информация о карточке

  },
  FAVORITE: {
    divClass: `favorites__places`, // куда вставляем(контейнер)
    article: `favorites__card`, // что вставляем, карточка
    img: {
      containerClass: `favorites`, // favorites__image-wrapper обертка для изображения
      width: 150,
      height: 110
    },
    info: `favorites__card-info`, // информация о карточке
  },
};

const MapSettings = {
  MAIN: {
    width: `100%`,
    height: `100%`
  },
  PROPERTY: {
    width: `1144px`, // зачем тут `` ? width: `100%` - почему не такое значение
    height: `579px`,
    margin: `0 auto 50px`,
  }
};

const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export {OfferType, CITIES, Type, MapSettings};

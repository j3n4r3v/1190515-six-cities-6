const OfferType = {
  APARTMENT: `Apartment`,
  PRIVATEROOM: `Private room`,
  STUDIO: `Studio`
};

const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const cityAmsterdam = [52.38333, 4.9];

const points = [
  {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    title: `Вариант1`
  }, {
    latitude: 52.369553943508,
    longitude: 4.85309666406198,
    title: `Вариант2`
  }, {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    title: `Вариант3`
  }, {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    title: `Вариант4`
  }
];

export {OfferType, CITIES, points, cityAmsterdam};

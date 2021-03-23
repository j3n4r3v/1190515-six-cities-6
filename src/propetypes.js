import PropTypes from "prop-types";

export const offerPropTypes = PropTypes.shape({
  "bedrooms": PropTypes.number.isRequired,
  "id": PropTypes.number.isRequired,
  "city": PropTypes.shape({
    "location": PropTypes.shape({
      "latitude": PropTypes.number.isRequired,
      "longitude": PropTypes.number.isRequired,
      "zoom": PropTypes.number.isRequired
    }),
    "name": PropTypes.string.isRequired
  }),
  "description": PropTypes.string.isRequired,
  "goods": PropTypes.arrayOf(PropTypes.string.isRequired),
  "host": PropTypes.shape({
    "avatarUrl": PropTypes.string.isRequired,
    "id": PropTypes.number.isRequired,
    "isPro": PropTypes.bool.isRequired,
    "name": PropTypes.string.isRequired
  }),
  "favoitesImages": PropTypes.arrayOf(PropTypes.string.isRequired),
  "isPremium": PropTypes.bool.isRequired,
  "pointLocation": PropTypes.arrayOf(PropTypes.shape({
    "latitude": PropTypes.number.isRequired,
    "longitude": PropTypes.number.isRequired,
    "zoom": PropTypes.number.isRequired
  })),
  "maxAdults": PropTypes.number.isRequired,
  "previewImage": PropTypes.string.isRequired,
  "price": PropTypes.number.isRequired,
  "rating": PropTypes.number.isRequired,
  "title": PropTypes.string.isRequired,
  "type": PropTypes.string.isRequired
});

export const reviewPropTypes = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
});

export const authPropTypes = PropTypes.shape({
  avatarUrl: PropTypes.string,
  id: PropTypes.number,
  isPro: PropTypes.bool,
  email: PropTypes.string,
  name: PropTypes.string
});

export const TypePropTypes = PropTypes.shape({
  CITY: PropTypes.shape({
    divClass: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    img: PropTypes.shape({
      containerClass: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }),
    info: PropTypes.string.isRequired,
  }),
  PROPERTY: PropTypes.shape({
    divClass: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    img: PropTypes.shape({
      containerClass: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }),
    info: PropTypes.string.isRequired,
  }),
  FAVORITE: PropTypes.shape({
    divClass: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    img: PropTypes.shape({
      containerClass: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }),
    info: PropTypes.string.isRequired,
  })
});

export default {offerPropTypes, reviewPropTypes, authPropTypes, TypePropTypes};

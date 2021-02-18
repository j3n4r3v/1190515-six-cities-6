import PropTypes from "prop-types";

const offerPropTypes = PropTypes.shape({
  "bedrooms": PropTypes.string.isRequired,
  "city": PropTypes.shape({
    "location": {
      "latitude": PropTypes.number.isRequired,
      "longitude": PropTypes.number.isRequired,
      "zoom": PropTypes.number.isRequired
    },
    "name": PropTypes.string.isRequired
  }),
  "description": PropTypes.string.isRequired,
  "goods": PropTypes.arrayOf(PropTypes.string.isRequired),
  "host": PropTypes.shape({
    "avatar_url": PropTypes.string.isRequired,
    "id": PropTypes.number.isRequired,
    "is_pro": PropTypes.bool.isRequired,
    "name": PropTypes.string.isRequired
  }),
  "id": PropTypes.number.isRequired,
  "images": PropTypes.arrayOf(PropTypes.string.isRequired),
  "is_premium": PropTypes.bool.isRequired,
  "location": PropTypes.shape({
    "latitude": PropTypes.number.isRequired,
    "longitude": PropTypes.number.isRequired,
    "zoom": PropTypes.number.isRequired
  }),
  "max_adults": PropTypes.number.isRequired,
  "preview_image": PropTypes.string.isRequired,
  "price": PropTypes.number.isRequired,
  "rating": PropTypes.number.isRequired,
  "title": PropTypes.string.isRequired,
  "type": PropTypes.string.isRequired
});

const commentPropTypes = PropTypes.shape({
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

export default {offerPropTypes, commentPropTypes};

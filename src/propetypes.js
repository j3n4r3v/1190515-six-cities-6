import PropTypes from "prop-types";
import { OfferType } from "./const";

export const offerPropTypes = PropTypes.shape({
  "bedrooms": PropTypes.number.isRequired,
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
  "id": PropTypes.number.isRequired,
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
  "type": PropTypes.oneOf([OfferType.APARTMENT, OfferType.PRIVATEROOM, OfferType.STUDIO]).isRequired
});

export const rewievPropTypes = PropTypes.shape({
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
  avatarUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});

export default { offerPropTypes, rewievPropTypes, authPropTypes };

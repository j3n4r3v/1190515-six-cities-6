import React from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

import {reviewPropTypes} from "../../propetypes";

import FeedBackForm from "../feedbackform/feedbackform";
import PropertyReviewItem from "../property-review-item/property-review-item";


const PropertyReviews = ({reviews}) => {

  const {authInfo} = useSelector((state) => state.USER);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <PropertyReviewItem review={review} key={review.id} />)
        }
      </ul>
      {
        authInfo ? <FeedBackForm /> : ``
      }
    </section>
  );
};

PropertyReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes),
  id: PropTypes.string
};

export default PropertyReviews;

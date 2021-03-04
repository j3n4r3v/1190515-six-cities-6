
import React from "react";
import PropTypes from "prop-types";

import {reviewPropTypes} from "../../propetypes";

import Review from "../review/review";

const ReviewList = (props) => {
  const {reviews} = props;

  return <React.Fragment>
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </ul>
  </React.Fragment>;
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes)
};

export default ReviewList;

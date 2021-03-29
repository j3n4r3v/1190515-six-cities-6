
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { reviewPropTypes } from "../../propetypes";

import Review from "../review/review";

import { fetchPropertyInfo } from "../../store/api-actions";

import { connect } from "react-redux";

import AuthInfoScreen from "../auth-info-screen/auth-info-screen";

const ReviewList = (props) => {
  const { reviews, onLoadRewies, id, isPropertyInfoLoaded } = props;

  useEffect(() => {
    onLoadRewies(id);
  }, [id]);

  if (!isPropertyInfoLoaded) {
    return <AuthInfoScreen />;
  }

  return <React.Fragment>
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </ul>
  </React.Fragment>;
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes),
  id: PropTypes.string,
  onLoadRewies: PropTypes.func,
  isPropertyInfoLoaded: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isPropertyInfoLoaded: state.isPropertyInfoLoaded,
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch) => ({
  onLoadRewies(id) {
    dispatch(fetchPropertyInfo(id));
  }
});

export { ReviewList };
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);

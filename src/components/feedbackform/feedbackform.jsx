import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {stars} from "../../const";

import {addComment} from "../../store/api-actions";
import {ActionCreator} from "../../store/actions";

import Error from "../feedbackform/error";

const FeedBackForm = ({id, onSubmit, isFormDisabled, isFormError, onError}) => {

  const [data, setData] = useState({
    review: ``,
    rating: ``
  });

  useEffect(() => {
    if (!isFormDisabled && !isFormError) {
      setData((prevState) => ({
        ...prevState,
        review: ``,
        rating: ``
      }));
    }
  }, [isFormDisabled, isFormError]);

  useEffect(() => {
    if (isFormError) {
      setTimeout(() => onError(false), 5000);
    }
  }, [isFormError]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      comment: data.review,
      rating: data.rating
    }, id);

  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setData({
      ...data,
      [name]: value
    });
  };

  return <React.Fragment>

    <form onSubmit={handleSubmit}
      className="reviews__form form"
      action="#"
      method="post">
      {
        isFormError && <Error />
      }
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {
          stars.map((star) => {
            return (
              <React.Fragment key={star}>
                <input
                  onChange={handleFieldChange}
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={`${star}`}
                  id={`${star}-stars`}
                  type="radio"
                  disabled={isFormDisabled}
                  checked={star === data.rating}
                />
                <label
                  htmlFor={`${star}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title="perfect"
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlink="true" href="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          })
        }

      </div>
      <textarea
        onChange={handleFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={300}
        disabled={isFormDisabled}
        value={data.review}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!data.review || !data.rating}
        >Submit</button>
      </div>
    </form>

  </React.Fragment>;
};

FeedBackForm.propTypes = {
  onSubmit: PropTypes.func,
  id: PropTypes.string,
  isFormDisabled: PropTypes.bool,
  isFormError: PropTypes.bool,
  onError: PropTypes.func
};

const mapStateToProps = (state) => ({
  isFormDisabled: state.isFormDisabled,
  isFormError: state.isFormError
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(comment, id) {
    dispatch(addComment(comment, id));
  },
  onError(bool) {
    dispatch(ActionCreator.formIsError(bool));
  }
});

export {FeedBackForm};
export default connect(mapStateToProps, mapDispatchToProps)(FeedBackForm);



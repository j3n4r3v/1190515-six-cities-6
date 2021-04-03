import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import {STARS} from "../../const";
import {addReview} from "../../store/api-actions";

import Error from "../property-feedbackform/error";

import {CommentLength} from "../../const";

const PropertyFeedBackForm = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {isFormDisabled, isError} = useSelector((state) => state.PROPERTY);

  const [data, setData] = useState({
    review: ``,
    rating: ``
  });

  useEffect(() => {
    if (!isError && !isFormDisabled) {
      setData(() => ({
        review: ``,
        rating: ``
      }));
    }
  }, [isError, isFormDisabled]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => dispatch(isError(false), 5000));
    }
  }, [isError]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(addReview({
      comment: data.review,
      rating: data.rating
    }, id));

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
        isError && <Error />
      }
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {
          STARS.map((star) => {
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
                  checked={`${star}` === data.rating}
                />
                <label
                  htmlFor={`${star}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={star}
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
        maxLength={CommentLength.MAX}
        disabled={isFormDisabled}
        value={data.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{CommentLength.MIN} characters</b>.
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

export default PropertyFeedBackForm;

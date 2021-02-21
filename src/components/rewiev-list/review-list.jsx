
import React from "react";
import PropTypes from "prop-types";

import {commentPropTypes} from "../../propetypes";

const Rewiev = (props) => {
  const {comments} = props;
  return <React.Fragment>
    <ul className="reviews__list">
      {comments.map((rewiev) => {
        const {id, user, comment, date, rating} = rewiev;
        return <li className="reviews__item" key={id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${20 * rating}%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {comment}.
            </p>
            <time className="reviews__time" dateTime={date}>April 2019</time>
          </div>
        </li>;
      })
      }
    </ul>
  </React.Fragment>;
};

Rewiev.propTypes = {
  comments: PropTypes.arrayOf(commentPropTypes)
};

export default Rewiev;
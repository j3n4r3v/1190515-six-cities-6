import React from "react";
import PropTypes from "prop-types";

import withActiveFlag from "../../hocs/with-active-flag";

const Sort = (props) => {
  const {
    isActiveOption,
    isActiveList,
    onActiveChange,
    sorts = [], // массив названий кнопок
    onSortClick = () => {},
  } = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => onActiveChange()}
      > Popular
        {isActiveOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isActiveList ?
          `places__options--opened` :
          ``}`}
      >
        {sorts.map((sort, i) => (
          <li
            className={`places__option ${isActiveOption ?
              `places__option--active` :
              ``}`}
            tabIndex="0"
            key={sort + i}
            onClick={() => {
              onSortClick(sort); // нужен ли тут параметр?
              onActiveChange(sort);
            }}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form >
  );
};

Sort.propTypes = {
  isActiveOption: PropTypes.bool,
  isActiveList: PropTypes.bool,
  onActiveChange: PropTypes.func,
  sorts: PropTypes.array,
  onSortClick: PropTypes.func
};

export default withActiveFlag(Sort);

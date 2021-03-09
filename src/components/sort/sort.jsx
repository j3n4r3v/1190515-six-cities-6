import React from "react";
import PropTypes from "prop-types";

import withActiveFlag from "../../hocs/with-active-flag";

const Sort = (props) => {
  const {
    activeSortItem,
    isActiveOptions,
    onActiveChange,
    sorts = [],
    onSortClick = () => {},
  } = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={onActiveChange}
      >
        {activeSortItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isActiveOptions ?
          `places__options--opened` :
          ``}`}
      >
        {sorts.map((sort, index) => (
          <li
            className={`places__option
            ${activeSortItem === sort ?
            `places__option--active` :
            ``}`}
            tabIndex="0"
            key={sort + index}
            onClick={() => {
              onSortClick(sort);
              onActiveChange();
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
  activeSortItem: PropTypes.sort,
  isActiveOptions: PropTypes.flag,
  onActiveChange: PropTypes.func,
  sorts: PropTypes.sorts,
  onSortClick: PropTypes.func,
};

export default withActiveFlag(Sort);

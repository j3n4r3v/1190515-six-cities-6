import React from "react";
import PropTypes from "prop-types";

import withActiveFlag from "../../hocs/with-active-flag";
import OptionsItemsList from "../options-items-list/options-items-list";

import {SortType} from "../../const";

const Sort = (props) => {
  const {
    activeOption,
    isActiveList,
    onActiveChange,
    onChangeOption,
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
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isOpen && <OptionsItemsList
          activeOption={activeOption}
          onChangeOption={onChangeOption}
          options={SortType} />
      }
    </form >
  );
};

Sort.propTypes = {
  activeOption: PropTypes.string,
  isActiveList: PropTypes.bool,
  onActiveChange: PropTypes.func,
  sorts: PropTypes.array,
  onSortClick: PropTypes.func
};

export default withActiveFlag(Sort);

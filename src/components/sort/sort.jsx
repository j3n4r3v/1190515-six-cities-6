import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeActiveSortType} from "../../store/actions";
import OptionsItemsList from "../options-items-list/options-items-list";

import {SortType} from "../../const";

const Sort = (props) => {
  const {activeOption, onChangeOptionItem} = props;
  const [isOpenList, setIsOpenList] = useState(false);

  const toggleOption = () => {
    setIsOpenList(!isOpenList);
  };

  const handleChangeOption = (item) => {
    onChangeOptionItem(item);
    toggleOption();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type" tabIndex="0" onClick={() => toggleOption()}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      {
        isOpenList && <OptionsItemsList
          activeOption={activeOption}
          onChangeOption={handleChangeOption}
          options={SortType} />
      }

    </form >
  );
};

Sort.propTypes = {
  activeOption: PropTypes.string,
  onChangeOptionItem: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    activeOption: state.activeOption
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeOptionItem: (option) => {
    dispatch(changeActiveSortType(option));
  }
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);

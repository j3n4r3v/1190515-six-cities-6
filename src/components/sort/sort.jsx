import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import OptionsItemsList from "../options-items-list/options-items-list";

import {SortType} from "../../const";

const Sort = (props) => {
  const {activeOption, onChangeOption} = props;
  const [isOpen, setIsOpen] = useState(true);

  const toggleOption = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeOption = (item) => {
    onChangeOption(item);
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
        isOpen && <OptionsItemsList
          activeOption={activeOption}
          onChangeOption={handleChangeOption} // () =>handleChangeOption()?
          options={SortType} />
      }

    </form >
  );
};

Sort.propTypes = {
  activeOption: PropTypes.string,
  onChangeOption: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    activeOption: state.activeOption,
  };
};

const mapDispatchToProps = (dispatch) => ({ // Передает в компонент методы для обновления store
  onChangeOption: (type) => {
    dispatch(ActionCreator.changeOption(type));
  }
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);

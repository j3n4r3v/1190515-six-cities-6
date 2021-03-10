import React from "react";
import PropTypes from "prop-types";

const ChooseOptionItem = (props) => {
  const {option, activeOption, onChangeOptionItem} = props;

  return (
    <li className={`places__option ${option === activeOption && `places__option--active`}`}
      tabIndex="0"
      onClick={() => onChangeOptionItem(option)}
    >
      {option}
    </li>
  );
};

ChooseOptionItem.propTypes = {
  option: PropTypes.string,
  activeOption: PropTypes.string,
  onChangeOptionItem: PropTypes.func
};

export default ChooseOptionItem;

import React from "react";
import PropTypes from "prop-types";

const ChooseOptionItem = (props) => {
  const {option, activeOption, onChangeOption} = props;

  return (
    <li className={`places__option ${option === activeOption && `places__option--active`}`}
      tabIndex="0"
      onClick={() => onChangeOption(option)}
    >
      {option}
    </li>
  );
};

ChooseOptionItem.propTypes = {
  option: PropTypes.string,
  activeOption: PropTypes.string,
  onChangeOption: PropTypes.func
};

export default ChooseOptionItem;

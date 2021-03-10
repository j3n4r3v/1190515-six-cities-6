import React from "react";
import PropTypes from "prop-types";

import ChooseOptionItem from "../choose-option-item/choose-option-item";

const OptionsItemsList = (props) => {
  const {options, activeOption, onChangeOption} = props;

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {
        options.map((option, i) => <ChooseOptionItem activeOption={activeOption} onChangeOption={onChangeOption} option={option} key={option + i} />)
      }
    </ul>
  );
};

OptionsItemsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  activeOption: PropTypes.string,
  onChangeOption: PropTypes.func
};

export default OptionsItemsList;

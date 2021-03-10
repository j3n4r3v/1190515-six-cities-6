import React from "react";
import PropTypes from "prop-types";

import ChooseOptionItem from "../choose-option-item/choose-option-item";

const OptionsItemsList = (props) => {
  const {options, activeOption, onChangeOptionItem} = props;

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {
        options.map((option, i) => <ChooseOptionItem activeOption={activeOption} onChangeOptionItem={onChangeOptionItem} option={option} key={option + i} />)
      }
    </ul>
  );
};

OptionsItemsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  activeOption: PropTypes.string,
  onChangeOptionItem: PropTypes.func
};

export default OptionsItemsList;

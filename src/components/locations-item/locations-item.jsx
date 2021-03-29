import React from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

import {changeCity} from "../../store/actions";

const LocationsItem = ({city}) => {

  const dispatch = useDispatch();
  const {activeCity} = useSelector((state) => state.MAIN);

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${city === activeCity && `tabs__item--active`}`}
        href="#"
        onClick={() => dispatch(changeCity(city))}>
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationsItem.propTypes = {
  city: PropTypes.string
};

export default LocationsItem;

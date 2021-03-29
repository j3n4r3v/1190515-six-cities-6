import React from "react";
import LocationsItem from "../locations-item/locations-item";
import {CITIES} from "../../const";

const LocationsList = () => {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          CITIES.map((city, i) => <LocationsItem city={city} key={city + i} />)
        }
      </ul>
    </section>
  );
};

export default LocationsList;

import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';

import {offerPropTypes} from "../../propetypes";
import {getRandomArrayItem} from "../../utils";

import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {offers} = props;
  const getRandomOfferFromArray = getRandomArrayItem(offers);
  const {city, pointLocation, title} = getRandomOfferFromArray;
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: city.location.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach(() => { // forEach/map - better? need offer in param ?
      // const {title, pointLocation} = offer ?
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: pointLocation.latitude,
        lng: pointLocation.longitude
      },
      {
        icon: customIcon
      })
        .addTo(mapRef.current)
        .bindPopup(title);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    < div id = "map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  offer: offerPropTypes
};

export default Map;

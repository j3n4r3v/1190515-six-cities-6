import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import {offerPropTypes} from "../../propetypes";

import {MapSettings} from "../../const";

import "leaflet/dist/leaflet.css";


const PIN = leaflet.icon({
  iconUrl: `./img/pin.svg`,
  iconSize: [27, 39]
});

const ACTIVE_PIN = leaflet.icon({
  iconUrl: `./img/pin-active.svg`,
  iconSize: [27, 39]
});

const Map = (props) => {
  const {offers, activeCity, mapSettings} = props;
  const card = offers[0];
  const {city} = card;
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

    offers.forEach((offer) => {
      const {pointsLocation, title, id} = offer;
      leaflet
        .marker({
          lat: pointsLocation.latitude,
          lng: pointsLocation.longitude
        },
        {icon: id === activeCity ? ACTIVE_PIN : PIN}
        )
          .addTo(mapRef.current)
          .bindPopup(title);


      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <div id="map" style={MapSettings[mapSettings]} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  offer: offerPropTypes,
  activeCity: PropTypes.number,
  mapSettings: PropTypes.string
};

export default Map;

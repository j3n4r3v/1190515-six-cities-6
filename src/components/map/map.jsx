import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import {offerPropTypes} from "../../propetypes";

import "leaflet/dist/leaflet.css";


const ICON = leaflet.icon({
  iconUrl: `./img/pin.svg`,
  iconSize: [27, 39]
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `./img/pin-active.svg`,
  iconSize: [27, 39]
});

const Map = (props) => {
  const {offers, activePin} = props;

  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: offers[0].city.location.latitude,
        lng: offers[0].city.location.longitude
      },
      zoom: offers[0].city.location.zoom,
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
        {icon: id === activePin ? ACTIVE_ICON : ICON}
        )
          .addTo(mapRef.current)
          .bindPopup(title);


      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <div id = "map" style={{height: `100%`, width: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  offer: offerPropTypes,
  activePin: PropTypes.number
};

export default Map;

import React, { useEffect, useRef } from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import { offerPropTypes } from "../../propetypes";

import { MapSettings } from "../../const";

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
  const { offers, mapSettings, activeOffer } = props;
  const { city: { location } } = offers[0];
  // const {city: {location}} = activeCity;
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: location.latitude,
        lng: location.longitude
      },
      zoom: location.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };

  }, [props.offers]);

  useEffect(() => {
    const map = leaflet.layerGroup().addTo(mapRef.current);
    offers.forEach((offer) => {
      const { pointsLocation, title, id } = offer;
      leaflet
        .marker({
          lat: pointsLocation.latitude,
          lng: pointsLocation.longitude
        },
          { icon: id === activeOffer ? ACTIVE_PIN : PIN }
        )
        .addTo(map)
        .bindPopup(title);
    });

    return () => map.clearLayers();

  }, [props.activeOffer, props.offers]);

  return (
    <div id="map" style={MapSettings[mapSettings]} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  offer: offerPropTypes,
  activeOffer: PropTypes.number,
  // activeCity: offerPropTypes,
  mapSettings: PropTypes.string
};

export default Map;

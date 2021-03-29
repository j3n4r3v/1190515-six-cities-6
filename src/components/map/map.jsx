import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import {offerPropTypes} from "../../propetypes";

import {MapSettings} from "../../const";

import "leaflet/dist/leaflet.css";

const ICON = leaflet.icon({
  iconUrl: `./img/pin.svg`,
  iconSize: [27, 39]
});
const ACTIVE_PIN_ICON = leaflet.icon({
  iconUrl: `./img/pin-active.svg`,
  iconSize: [27, 39]
});
const Map = ({activeCity, offers, activeOffer, mapSettings}) => {
  const mapRef = useRef();
  const markersRef = useRef(leaflet.layerGroup([]));
  const activeMarkerRef = useRef(leaflet.layerGroup([]));
  useEffect(() => {
    const {city: {location}} = activeCity;
    mapRef.current = leaflet.map(`map`, {
      center: [location.latitude, location.longitude],
      zoom: location.zoom,
      zoomControl: false,
      marker: true,
      layers: [markersRef.current, activeMarkerRef.current]
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);
    mapRef.current.setView([location.latitude, location.longitude], location.zoom);
    return () => {
      mapRef.current.remove();
      mapRef.current = null;
    };
  }, []);
  useEffect(() => {
    const {city: {location}} = activeCity;
    if (mapRef.current) {
      mapRef.current.flyTo(
          [location.latitude, location.longitude],
          location.zoom,
          {duration: 0.5}
      );
      offers.map((offer) => {
        markersRef.current.addLayer(
            leaflet.marker([offer.location.latitude, offer.location.longitude], {
              icon: ICON,
            })
        );
      });
    }
    return () => {
      markersRef.current.clearLayers();
    };
  }, [offers, activeCity.city.name]);
  useEffect(() => {
    if (activeOffer) {
      const {location} = activeOffer;
      activeMarkerRef.current.addLayer(
          leaflet.marker(
              [location.latitude, location.longitude],
              {icon: ACTIVE_PIN_ICON}
          )
      );
    }
    return () => {
      activeMarkerRef.current.clearLayers();
    };
  }, [activeOffer]);

  return (

    <div id="map" style={MapSettings[mapSettings]}></div>
  );

};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  activeOffer: offerPropTypes,
  activeCity: offerPropTypes,
  mapSettings: PropTypes.string
};

export default Map;

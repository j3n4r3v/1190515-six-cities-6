import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';
import {offerPropTypes} from "../../propetypes";

import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {offers} = props;
  const {offer} = offers;
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        latitude: offer.city.location.latitude,
        longitude: offer.city.location.longitude
      },
      zoom: offer.city.location.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach(({title, pointsLocation}) => { // offer?
      const customIcon = leaflet.icon({ // const {title, pointsLocation} = offer ?
        iconUrl: `./img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        latitude: pointsLocation.latitude,
        longitude: pointsLocation.longitude
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
    <div id=".cities__map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  offer: offerPropTypes
};

export default Map;

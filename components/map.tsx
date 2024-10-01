import React from 'react';
import MapboxGL from '@rnmapbox/maps';
import { MAPBOX_API_KEY } from '@env';

MapboxGL.setAccessToken(MAPBOX_API_KEY);

const MapComponent: React.FC = () => {
  return (
    <MapboxGL.MapView style={{ flex: 1 }}>
      <MapboxGL.Camera
        zoomLevel={8}
        centerCoordinate={[-73.99155, 40.73061]}
      />
    </MapboxGL.MapView>
  );
}

export default MapComponent;

// src/leaflet-markercluster.d.ts
import * as L from 'leaflet';

declare module 'leaflet' {
  export class MarkerClusterGroup extends L.FeatureGroup {
    addLayer(layer: L.Layer): this;
    removeLayer(layer: L.Layer): this;
    clearLayers(): this;
    getBounds(): L.LatLngBounds;
    zoomToShowLayer(layer: L.Layer, callback?: () => void): void;
  }

  export function markerClusterGroup(options?: any): MarkerClusterGroup;
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import App from './App';

// fromLonLat([N, W])
const montreal = fromLonLat([-73.5673, 45.5017]);

const view = new View({
  center: montreal,
  zoom: 12
});

// eslint-disable-next-line no-new
new Map({
  target: 'map',
  layers: [
    new TileLayer({
      preload: 4,
      source: new OSM()
    })
  ],
  loadTilesWhileAnimating: true,
  view
});

const { document } = global.window;
ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import MapsApp from './Map/MapsApp'
import Card from './Card/Card'
import './index.css';

import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(, document.getElementById('root'));
ReactDOM.render(<MapsApp url="https://data.austintexas.gov/resource/5zpr-dehc.json" />, document.getElementById('root'));
//ReactDOM.render(<Card/>, document.getElementById('root'));
registerServiceWorker();

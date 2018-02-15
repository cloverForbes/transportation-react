import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import Test from './Test'
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(, document.getElementById('root'));
ReactDOM.render(<App/> , document.getElementById('root'));
//ReactDOM.render(<Card/>, document.getElementById('root'));
//ReactDOM.render(<Test/>, document.getElementById('root'));

registerServiceWorker();

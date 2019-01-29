import React from 'react';
import ReactDOM from 'react-dom';

import EventEmitter from 'events';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

React.Component.prototype.event = new EventEmitter();
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

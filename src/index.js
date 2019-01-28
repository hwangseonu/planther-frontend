import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import EventEmitter from 'events';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

const store = new createStore(reducers, applyMiddleware(thunkMiddleware));

React.Component.prototype.event = new EventEmitter();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();

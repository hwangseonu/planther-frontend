import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'events';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

React.Component.prototype.event = new EventEmitter();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();

import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Index from "./pages/Index/Index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Route path={'/'} component={Index} exact/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

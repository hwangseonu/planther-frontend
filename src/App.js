import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Index from "./pages/Index/Index";
import Calendar from "./pages/Calendar/Calendar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Route path={'/'} component={Index} exact/>
            <Route path={'/calendar/:year/:month'} component={Calendar} exact/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

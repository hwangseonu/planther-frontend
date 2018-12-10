import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Index from './page/index/Index';
import Calendar from "./page/calendar/Calendar";

class App extends Component {

  render() {
    return (
      <div id={'App'}>
        <BrowserRouter>
          <Route path={'/'} component={Index} exact/>
        </BrowserRouter>
        <BrowserRouter>
          <Route path={'/calendar'} component={Calendar} exact/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

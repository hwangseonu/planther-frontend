import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Index from './page/index/Index';
import Calendar from "./page/calendar/Calendar";

class App extends Component {

  render() {
    return (
      <div id={'App'}>
        <BrowserRouter>
          <Fragment>
            <Route path={'/'} component={Index} exact/>
            <Route path={'/calendar'} component={Calendar} exact/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './pages/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Route path={'/'} component={Main} exact/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

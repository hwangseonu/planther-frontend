import React, {Component} from 'react';
import Navbar from "../../components/Navbar/Navbar";

import './Index.css';

class Index extends Component {

  render() {
    return (
      <div id={'index'}>
        <Navbar/>
        <div className={'page-header'}>
          <div>
            <p className={'page-title'}>Planther</p>
            <p>함께 채워가는 우리만의 달력 "plan together"</p>
            <button className={'btn-cal'}>Go to calendar</button>
          </div>
        </div>
        <div className={'page-section'}>

        </div>
      </div>
    )
  }

}

export default Index;

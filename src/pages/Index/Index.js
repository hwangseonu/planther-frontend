import React, {Component} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import moment from 'moment';

import './Index.css';

class Index extends Component {

  render() {
    const year = parseInt(moment().format('YYYY'));
    const month = parseInt(moment().format('MM'));

    return (
      <div id={'index'}>
        <Navbar/>
        <div className={'page-header'}>
          <div>
            <p className={'page-title'}>Planther</p>
            <p>함께 채워가는 우리만의 달력 "plan together"</p>
            <a href={`/calendar/${year}/${month}`}>
              <button className={'btn-cal'}>Go to calendar</button>
            </a>
          </div>
        </div>
      </div>
    )
  }

}

export default Index;

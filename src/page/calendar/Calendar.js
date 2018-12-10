import React, {Component} from 'react';
import CalendarComp from '../../component/calendar/Calendar';
import Header from "../../component/header/Header";

import './Calendar.css';

class Calendar extends Component {

  render() {
    return (
      <div id={"calendar"}>
        <Header/>
        <CalendarComp/>
      </div>
    )
  }
}

export default Calendar;

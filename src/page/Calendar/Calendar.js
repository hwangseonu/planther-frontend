import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

import Header from "../../component/Header/Header";
import CalendarComp from '../../component/Calendar/Calendar';

import config from '../../config';
import './Calendar.css';


class Calendar extends Component {


  componentWillMount() {
    if (!cookie.load('JWT')) {
      alert('로그인 후 이용해 주세요.');
      window.location.href = '/'
    }
    axios.get(`${config.server}/users`, {
      headers: {
        Authorization: `Bearer ${cookie.load('JWT')}`
      }
    }).then(res => {

    }).catch(e => {
      alert('로그인 후 이용해 주세요.');
      window.location.href = '/';
    })
  }

  render() {
    const year = parseInt(this.props.match.params.year);
    const month = parseInt(this.props.match.params.month);
    return (
      <div id={'calendar'}>
        <Header/>
        <CalendarComp className={'calendar'} year={year} month={month}/>
      </div>
    )
  }
}

export default Calendar;

import React, {Component} from 'react';
import cookie from 'react-cookies';
import {Table} from 'reactstrap';

import Day from './day/Day';

import './Calendar.css';

const Utils = {
  isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  },
  getDays(year, month) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = days[month - 1];
    if (month === 2 && Utils.isLeapYear(year)) {
      day += 1;
    }
    return day;
  },
  getDayOfWeek(year, month, day) {
    const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    year -= month < 3;
    return Math.floor(year + year / 4 - year / 100 + year / 400 + t[month - 1] + day) % 7;
  }
};

class Calendar extends Component {

  componentWillMount() {
    if (!cookie.load('JWT')) {
      alert('로그인 후 이용해 주세요!');
      window.location.href = '/';
    }
  }

  render() {
    // const {year, month} = this.props.match.params;
    const year = 2018;
    const month = 12;
    let tbody = [];
    let tmp = [];

    let key = 0;

    for (let i = 1; i <= Utils.getDayOfWeek(year, month, 1); i++) {
      tmp.push(<th key={key++} className={'day blank'}/>);
    }

    let c = 1;
    for (let i = Utils.getDayOfWeek(year, month, 1); i < 7; i++) {
      tmp.push(<Day key={key++} year={year} month={month} day={c} className={(i === 0 ? 'sun ' : '') + (i === 6 ? 'sat' : '')} />);
      c++;
    }

    tbody.push(<tr key={key++}>{tmp}</tr>);

    tmp = [];
    let i = 1;
    for (c; c <= Utils.getDays(year, month); c++) {
      tmp.push(<Day key={key++} year={year} month={month} day={c} className={(i % 7 === 1 ? 'sun ' : '') + (i % 7 === 0 ? 'sat' : '')}/>);
      if (i % 7 === 0) {
        tbody.push(<tr key={key++}>{tmp}</tr>);
        tmp = [];
      }
      i++;
    }

    for (; tmp.length === 7;) {
      tmp.push(<th key={key++} className={'day blank'}/>)
    }
    tbody.push(<tr key={key++}>{tmp}</tr>);
    return (
      <div className={"calendar"}>
        <div id={'cal-info'} className={'hidden gray'}/>
        <div className={'calendar-header'}>
          <span>{year}</span>
          <h1>{month}</h1>
        </div>
        <Table className={'calendar-table'}>
          <thead className={'text-center'}>
          <tr>
            <th className={'sun'}>sun</th>
            <th className={''}>mon</th>
            <th className={''}>tue</th>
            <th className={''}>wed</th>
            <th className={''}>thu</th>
            <th className={''}>fri</th>
            <th className={'sat'}>sat</th>
          </tr>
          </thead>
          <tbody>
          {tbody}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Calendar;

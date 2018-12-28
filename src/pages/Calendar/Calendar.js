import React, {Component} from 'react';

import Loading from '../../components/Loading/Loading';
import Navbar from "../../components/Navbar/Navbar";
import Day from '../../components/Day/Day';
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
    return parseInt(year + year / 4 - year / 100 + year / 400 + t[month - 1] + day) % 7;
  }
};

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoad: false
    };
  }

  componentDidMount() {

  }

  render() {
    const year = parseInt(this.props.match.params.year);
    const month = parseInt(this.props.match.params.month);

    if (month > 12)
      window.location.href = `/calendar/${year}/12`;
    if (month < 1)
      window.location.href = `/calendar/${year}/1`;

    let items = [];
    [...Array(Utils.getDayOfWeek(year, month, 1)).keys()].map(i => items.push(<th key={`blank${i}`}/>));
    [...Array(Utils.getDays(year, month)).keys()].map(i => items.push(<th key={`day${i}`}>
      <Day date={{
        year: year,
        month: month,
        day: i + 1
      }}/>
    </th>));

    return (
      <div id={'calendar'}>
        <Loading visible={this.state.isLoad}/>
        <Navbar/>
        <div className={'calendar'}>
          <div className={'calendar-header'}>
            {/*<i className="prev fas fa-angle-left"/>*/}
            {/*<i className="next fas fa-angle-right"/>*/}
            <span>{year}</span>
            <span className={'month'}>{month}</span>
          </div>
          <div className={'calendar-body'}>
            <table className={'calendar-table'}>
              <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
              </thead>
              <tbody>
              <tr>{items.slice(0, 7)}</tr>
              <tr>{items.slice(7, 14)}</tr>
              <tr>{items.slice(14, 21)}</tr>
              <tr>{items.slice(21, 28)}</tr>
              <tr>{items.slice(28, 35)}</tr>
              <tr>{items.slice(35, 42)}</tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id={'addplan'}/>
      </div>
    )
  }
}

export default Calendar;

import React, {Component} from 'react';
import Day from "./Day/Day";

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
    this.onClickPrev = this.onClickPrev.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
  }

  onClickPrev() {
    let {year, month} = this.props;

    month -= 1;
    if (month < 1) {
      year -= 1;
      month = 12;
    }
    window.location.href = `/calendar/${year}/${month}`;
  }

  onClickNext() {
    let {year, month} = this.props;

    month += 1;
    if (month > 12) {
      year += 1;
      month = 1;
    }
    window.location.href = `/calendar/${year}/${month}`;
  }

  render() {
    const {year, month} = this.props;
    if (month > 12)
      window.location.href = `/calendar/${year}/12`;
    if (month < 1)
      window.location.href = `/calendar/${year}/1`;

    let items = [];
    [...Array(Utils.getDayOfWeek(year, month, 1)).keys()].map(i => items.push(<th key={`blank ${i}`} />));
    [...Array(Utils.getDays(year, month)).keys()].map(i => items.push(<th key={`day ${i}`}><Day year={year} month={month} day={i + 1} /></th>));

    return (
      <div className={`calendar`}>
        <div className={'calendar-header'}>
          <i onClick={this.onClickPrev} className="prev fas fa-angle-left"/>
          <i onClick={this.onClickNext} className="next fas fa-angle-right"/>
          <p>{this.props.year}</p>
          <p className={'year'}>{this.props.month}</p>
        </div>
        <table className={'table'}>
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
        <div id={'info'}/>
      </div>
    )
  }
}

export default Calendar;

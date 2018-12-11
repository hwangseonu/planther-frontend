import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

import './Day.css';
import Item from "../item/Item";

class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calendar: [],
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const {year, month, day} = this.props;
    axios.get(`https://class-room-calendar.herokuapp.com/calendar/${year}/${month}/${day}`, {
      headers: {
        Authorization: 'Bearer ' + cookie.load('JWT')
      }
    }).then(res => {
      this.setState({calendar: res.data});
    });
  }

  onClick(event) {
    if (event.target.classList.contains('ignore')) {
      return;
    }
    console.log(this.props.day);
  }

  render() {
    let items = [];
    let key = 0;
    for (let key in this.state.calendar) {
      const data = this.state.calendar[key];
      items.push(
        <Item key={`item-key${key++}`} title={data.title} type={data.type}/>
      );
    }
    return (
      <th onClick={this.onClick} className={`day day${this.props.day} ` + this.props.className + ' '  + (items.length !== 0 ? 'exists' : '')}>
        <div>
          {this.props.day}
          <button className={'add-btn right'}>+</button>
        </div>
        <div className={'day-items'}>
          {items}
        </div>
      </th>
    )
  }

}

export default Day;

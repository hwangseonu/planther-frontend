import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

import config from '../../../config';
import Item from "../Item/Item";

import './Day.css';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: []
    }
  }

  componentWillMount() {
    const {year, month, day} = this.props;
    axios.get(`${config.server}/calendar/${year}/${month}/${day}`, {
      headers: {
        Authorization: `Bearer ${cookie.load('JWT')}`
      }
    }).then(res => {
      this.setState({calendar: res.data});
    });
  }

  render() {
    let items = [];
    this.state.calendar.map((data, key) => items.push(<Item key={key} data={data}/>));
    return (
      <div className={'day ' + (items.length !== 0 ? 'gray' : '')}>
        <header>
          <span>{this.props.day}</span>
          <button className={'btn-add'}>+</button>
        </header>
        <section>
          {items}
        </section>
      </div>
    )
  }

}

export default Day;

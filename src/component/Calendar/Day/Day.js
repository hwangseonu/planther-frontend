import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookies';
import axios from 'axios';

import config from '../../../config';
import Item from "../Item/Item";
import Add from "../../Add/Add";

import './Day.css';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: []
    };
    this.onClickAdd = this.onClickAdd.bind(this);
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

  onClickAdd() {
    document.getElementById('add').classList.remove('hidden');
    ReactDOM.render(<Add year={this.props.year} month={this.props.month} day={this.props.day}/>, document.getElementById('add'));
  }

  render() {
    let items = [];
    this.state.calendar.map((data, key) => items.push(<Item key={key} data={data}/>));
    return (
      <div className={'day ' + (items.length !== 0 ? 'gray' : '')}>
        <header>
          <span>{this.props.day}</span>
          <button onClick={this.onClickAdd} className={'btn-add'}>+</button>
        </header>
        <section>
          {items}
        </section>
      </div>
    )
  }

}

export default Day;

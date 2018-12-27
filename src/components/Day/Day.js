import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

import config from '../../config';
import './Day.css';
import Item from "./Item/Item";

class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plans: []
    };
  }


  componentDidMount() {
    const {year, month, day} = this.props.date;
    axios.get(`${config.api}/plans/${year}/${month}/${day}`, {
      headers: {
        Authorization: `Bearer ${cookie.load('access')}`
      }
    }).then(res => {
      this.setState({plans: res.data});
    });
  }

  onHover(i) {
    return () => {
      document.getElementById(`btn-day${i}`).classList.remove('hidden')
    }
  }

  onMouseLeave(i) {
    return () => {
      document.getElementById(`btn-day${i}`).classList.add('hidden')
    }
  }

  render() {
    const day = this.props.date.day;
    let items = [];
    this.state.plans.map((v, i) => items.push(<Item key={`day${day}item${i}`} data={v}/>));

    return (
      <div className={'day-wrapper ' + (items.length > 0 ? 'gray' : '')} onMouseOver={this.onHover(day)} onMouseLeave={this.onMouseLeave(day)}>
        <div className={'day-header'}>
          <span className={'day'}>{day}</span>
          <i className="add-plan hidden fas fa-plus" id={`btn-day${day}`}/>
        </div>
        <div>
          {items}
        </div>
      </div>
    )
  }

}


export default Day;

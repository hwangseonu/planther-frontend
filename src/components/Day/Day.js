import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookies';
import axios from 'axios';

import config from '../../config';
import './Day.css';
import Item from "./Item/Item";
import AddPlan from "../AddPlan/AddPlan";

class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plans: []
    };
    this.onAddClick = this.onAddClick.bind(this);
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

  onAddClick() {
    document.getElementById('add').classList.remove('hidden');
    ReactDOM.render(<AddPlan date={this.props.date}/>, document.getElementById('add'));
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
          <i onClick={this.onAddClick} className="add-plan hidden fas fa-plus" id={`btn-day${day}`}/>
        </div>
        <div>
          {items}
        </div>
      </div>
    )
  }

}


export default Day;

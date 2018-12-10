import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calendar: [],
    }
  }

  componentDidMount() {
    const {year, month, day} = this.props;
    axios.get(`https://class-room-calendar.herokuapp.com/calendar/${year}/${month}/${day}`, {
      headers: {
        Authorization: 'Bearer ' + cookie.load('JWT')
      }
    }).then(res => {
      this.setState(res.data);
    })
  }

  onClick(event) {
    let day = event.target.classList.item(1);
    console.log(day.substring(3, day.length));
  }

  render() {
    return (
      <th onClick={this.onClick} className={`day day${this.props.day} ` + this.props.className}>
        {this.props.day}
      </th>
    )
  }

}

export default Day;

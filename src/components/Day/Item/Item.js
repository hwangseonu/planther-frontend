import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './Item.css';
import PlanInfo from "../../PlanInfo/PlanInfo";

class Item extends Component {

  onClick() {
    ReactDOM.render(<PlanInfo data={this.props.data}/>, document.getElementById('info'));
    document.getElementById('info-wrapper').classList.remove('hidden');
  }

  render() {
    return (
      <div className={`day-item ${this.props.data.type.toLowerCase()}`} onClick={this.onClick.bind(this)}>
        <span>{this.props.data.title}</span>
      </div>
    )
  }
}

export default Item;

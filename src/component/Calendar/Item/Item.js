import React, {Component} from 'react';

import './Item.css';

class Item extends Component {

  render() {
    return (
      <div className={`day-item ${this.props.data.type.toLowerCase()}`}>
        <span>{this.props.data.title}</span>
      </div>
    )
  }
}

export default Item;

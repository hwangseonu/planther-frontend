import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Info from '../../Info/Info';

import './Item.css';

class Item extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    ReactDOM.render(<Info data={this.props.data} />, document.getElementById('info'));
    document.getElementById('info').classList.remove('hidden');
  }

  render() {
    return (
      <div onClick={this.onClick} className={`day-item ${this.props.data.type.toLowerCase()}`}>
        <span>{this.props.data.title}</span>
      </div>
    )
  }
}

export default Item;

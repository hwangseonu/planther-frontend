import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Info from '../../info/Info';

class Item extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    ReactDOM.render(<Info title={this.props.title} content={this.props.content} username={this.props.username} />, document.getElementById('cal-info'));
    document.getElementById('cal-info').classList.remove('hidden');
    console.log(this.props.title);
  }

  render() {
    return (
      <div onClick={this.onClick} className={`ignore day-item ${this.props.type.toLowerCase()}`}>
        <small className={'ignore'}>{this.props.title}</small>
      </div>
    )
  }

}

export default Item;

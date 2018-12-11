import React, {Component} from 'react';

class Item extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
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

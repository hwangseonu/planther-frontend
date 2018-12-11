import React, {Component} from 'react';
import {Button} from 'reactstrap';

import './Info.css';

class Info extends Component {

  onClick() {
    document.getElementById('cal-info').classList.add('hidden');
  }

  render() {
    return (
      <div className={'info-wrapper'}>
        <h1 className={'info-title'}>{this.props.title}</h1>
        <i onClick={this.onClick} className={'info-close far fa-times-circle fa-3x'}/>
        <span>등록: {this.props.username}</span>
        <p className={'info-content'}>{this.props.content}</p>
        <Button className={'info-delete'} color={'danger'}>delete</Button>
      </div>
    )
  }
}

export default Info;

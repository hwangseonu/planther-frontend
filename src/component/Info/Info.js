import React, {Component} from 'react';

import './Info.css';

class Info extends Component {

  onCloseClick() {
    document.getElementById('info').classList.add('hidden');
  }

  render() {
    const {title, content} = this.props.data;
    return (
      <div className={'info'}>
        <i onClick={this.onCloseClick} className={'info-close far fa-times-circle fa-2x'}/>
        <h1 className={'info-title'}>{title}</h1>
        <p className={'info-content'}>{content}</p>
        <button className={'btn-delete'}>삭제</button>
      </div>
    )
  }
}

export default Info;

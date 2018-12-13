import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

import config from '../../config';
import './Info.css';

class Info extends Component {

  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }


  onCloseClick() {
    document.getElementById('info').classList.add('hidden');
  }

  onDeleteClick() {
    axios.delete(`${config.server}/calendar/${this.props.data.id}`, {
      headers: {
        Authorization: `Bearer ${cookie.load('JWT')}`
      }
    }).then(res => {
      document.getElementById('info').classList.add('hidden');
      alert('삭제되었습니다.');
      window.location.reload();
    }).catch(e => {
      alert('삭제할 수 없습니다. error_code: ' + e.response.status);
    });
  }

  render() {
    const {title, content} = this.props.data;
    let contents = [];
    content.split('\n').map((s, i) => contents.push(<p key={`content ${i}`}>{s}</p>));
    return (
      <div className={'info-wrapper'}>
        <div className={'info'}>
          <i onClick={this.onCloseClick} className={'info-close far fa-times-circle fa-2x'}/>
          <h1 className={'info-title'}>{title}</h1>
          <div className={'info-content'}>{contents}</div>
          <button onClick={this.onDeleteClick} className={'btn-delete'}>삭제</button>
        </div>
      </div>
    )
  }
}

export default Info;

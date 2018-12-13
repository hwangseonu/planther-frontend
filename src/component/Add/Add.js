import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

import config from '../../config';
import './Add.css';

class Add extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null,
      content: null,
      type: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onSelectType = this.onSelectType.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const {title, content, type} = this.state;

    console.log(content);

    const token = cookie.load('JWT');
    axios.post(`${config.server}/calendar`, {
      title: title,
      content: content,
      type: type,
      year: this.props.year,
      month: this.props.month,
      day: this.props.day,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      alert('등록되었습니다.');
      console.dir(res.data);
    })

  }

  onCloseClick() {
    document.getElementById('add').classList.add('hidden');
    document.getElementById('add-form').reset();
  }

  onTitleChange(event) {
    this.setState({title: event.target.value});
  }

  onContentChange(event) {
    this.setState({content: event.target.value});
  }

  onSelectType(event) {
    this.setState({type: event.target.value});
  }

  render() {
    return (
      <div id={'add-wrapper'}>
        <i onClick={this.onCloseClick} className={'add-close far fa-times-circle fa-2x'}/>
        <h1>일정 추가</h1>
        <form id={'add-form'} onSubmit={this.onSubmit}>
          <input onChange={this.onTitleChange} placeholder={'일정 제목'}/>
          <textarea onChange={this.onContentChange} placeholder={'일정 내용'}/>
          <select defaultValue={''} onChange={this.onSelectType}>
            <option value={''} disabled={true} hidden={true}>일정 종류</option>
            <option value={'ASSIGNMENT'}>과제</option>
            <option value={'PRESENTATION'}>발표</option>
            <option value={'EVENT'}>행사</option>
          </select>
          <button type={'submit'} className={'btn-send'}>추가하기</button>
        </form>
      </div>
    )
  }
}

export default Add;

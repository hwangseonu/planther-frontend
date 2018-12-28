import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import Loading from '../Loading/Loading';

import config from '../../config';
import './AddPlan.css';

class AddPlan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoad: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    this.setState({isLoad: true});
    const title = event.target[0].value;
    const content = event.target[1].value;
    const type = event.target[2].value;
    const {year, month, day} = this.props.date;

    axios.post(`${config.api}/plans`, {
      title: title,
      content: content,
      type: type,
      year: year,
      month: month,
      day: day
    }, {
      headers: {
        Authorization: `Bearer ${cookie.load('access')}`
      }
    }).then(res => {
      alert('일정이 등록되었습니다.');
      this.setState({isLoad: false});
      window.location.href = `/calendar/${year}/${month}`;
    }).catch(e => {
      let msg = '';
      try {
        msg = e.response.data.message;
      } catch (err) {
        msg = e.message;
      }
      alert('일정 등록에 실패했습니다. ' + msg);
      this.setState({isLoad: false});
    });

    event.preventDefault();
    event.target.reset();
  }

  onCloseClick() {
    document.getElementById('addplan-form').reset();
    document.getElementById('addplan-wrapper').classList.add('hidden');
  }

  onOutClick(event) {
    if (event.target.id === 'addplan-wrapper') {
      document.getElementById('addplan-form').reset();
      document.getElementById('addplan-wrapper').classList.add('hidden');
    }
  }

  render() {
    return (
      <div id={'addplan-wrapper'} className={'hidden'} onClick={this.onOutClick}>
        <Loading visible={this.state.isLoad}/>
        <div className={'addplan'}>
          <div className={'addplan-header'}>
            <span className={'addplan-title'}>일정 추가</span>
            <i onClick={this.onCloseClick} className={'addplan-close far fa-times-circle'}/>
          </div>
          <div className={'addplan-body'}>
            <form id={'addplan-form'} onSubmit={this.onSubmit}>
              <input placeholder={'일정 제목'}/>
              <textarea placeholder={'일정 내용'}/>
              <select defaultValue={''}>
                <option value={''} disabled={true} hidden={true}>일정 종류</option>
                <option value={'assignment'}>과제</option>
                <option value={'presentation'}>발표</option>
                <option value={'event'}>행사</option>
              </select>
              <button type={'submit'} className={'addplan-submit'}>추가하기</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default AddPlan;

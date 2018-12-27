import React, {Component} from 'react';
import axios from 'axios';

import Loading from "../Loading/Loading";
import config from '../../config';
import './Register.css';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoad: false,
      data: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(event) {
    this.setState({isLoad: true});

    const username = event.target[0].value;
    const password = event.target[1].value;
    const name = event.target[2].value;
    const grade = event.target[3].value;
    const cls = event.target[4].value;
    const number = event.target[5].value;

    axios.post(`${config.api}/users`, {
      username: username,
      password: password,
      name: name,
      grade: parseInt(grade),
      cls: parseInt(cls),
      number: parseInt(number)
    }).then(res => {
      alert('회원가입되었습니다.');
      this.setState({isLoad: false});
    }).catch(e => {
      let msg = '';
      try {
        msg = e.response.data.message;
      }catch (err) {
        msg = e.message;
      }
      alert('회원가입에 실패했습니다. ' + msg);
      this.setState({isLoad: false});
    });

    event.preventDefault();
    event.target.reset();
  }

  onCloseClick() {
    document.getElementById('register-form').reset();
    document.getElementById('register-wrapper').classList.add('hidden');
  }

  onOutClick(event) {
    if (event.target.id === 'register-wrapper') {
      document.getElementById('register-form').reset();
      document.getElementById('register-wrapper').classList.add('hidden');
    }
  }

  render() {
    return (
      <div onClick={this.onOutClick} id={'register-wrapper'} className={'hidden'}>
        <Loading visible={this.state.isLoad}/>
        <div className={'register'}>
          <div className={'register-header'}>
            <span className={'register-title'}>회원가입</span>
            <i onClick={this.onCloseClick} className={'register-close far fa-times-circle'}/>
          </div>
          <div className={'register-body'}>
            <form id={'register-form'} onSubmit={this.onSubmit}>
              <input placeholder={'아이디'}/>
              <input placeholder={'비밀번호'} type={'password'}/>
              <input placeholder={'이름'}/>
              <input placeholder={'학년'} type={'number'} min={1} max={3}/>
              <input placeholder={'반'} type={'number'} min={1} max={4}/>
              <input placeholder={'번호'} type={'number'} min={1} max={21}/>
              <button type={'submit'}>회원가입</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default Register;

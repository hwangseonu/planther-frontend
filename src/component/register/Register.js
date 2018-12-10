import React, {Component} from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import cookie from 'react-cookies';
import axios from 'axios';

import './Register.css';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      grade: null,
      cls: null,
      number: null
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleChangeCls = this.handleChangeCls.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onCancelClick(event) {
    document.getElementById('register').classList.add('hidden');
    document.getElementById('root').classList.remove('gray');
  }

  onSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8080/users', {
      username: this.state.username,
      password: this.state.password,
      grade: this.state.grade,
      cls: this.state.cls,
      number: this.state.number

    }).then(res => {
      alert('회원가입되었습니다.');
      window.location.href = '/';
    }).catch(e => {
      alert('회원가입에 실패하였습니다.');
    })
  }

  handleChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleChangeGrade(e) {
    this.setState({
      grade: e.target.value
    });
  }

  handleChangeCls(e) {
    this.setState({
      cls: e.target.value
    });
  }

  handleChangeNumber(e) {
    this.setState({
      number: e.target.value
    });
  }

  onLoginClick(event) {
    event.preventDefault();
    document.getElementById('register').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('root').classList.add('gray')
  }

  render() {
    return (
      <div id={'register'} className={this.props.className}>
        <div id={'register-panel'}>
          <h2>회원가입</h2>
          <Form id={'register-form'} onSubmit={this.onSubmit}>
            <FormGroup tag={'div'}>
              <Input type={'text'} className={'form-control'} placeholder={'Username'}
                     onChange={this.handleChangeUsername}/>
            </FormGroup>
            <FormGroup tag={'div'}>
              <Input type={'password'} className={'form-control'} placeholder={'Password'}
                     onChange={this.handleChangePassword}/>
            </FormGroup>
            <FormGroup tag={'div'}>
              <Input type={'text'} className={'form-control'} placeholder={'Grade'}
                     onChange={this.handleChangeGrade}/>
            </FormGroup>
            <FormGroup tag={'div'}>
              <Input type={'text'} className={'form-control'} placeholder={'Cls'}
                     onChange={this.handleChangeCls}/>
            </FormGroup>
            <FormGroup tag={'div'}>
              <Input type={'text'} className={'form-control'} placeholder={'Number'}
                     onChange={this.handleChangeNumber}/>
            </FormGroup>
            <Button type={'reset'} color={'danger'} className={'w-50 form-control'}
                    onClick={this.onCancelClick}>Cancel</Button>
            <Button type={'submit'} color={'primary'} className={'w-50 form-control'}>Register</Button>
            <a id={'SignUp'} onClick={this.onLoginClick}>로그인</a>
          </Form>
        </div>
      </div>
    )
  }

}

export default Register;

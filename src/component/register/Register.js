import React, {Component} from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import axios from 'axios';

import './Register.css';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      name: null,
      grade: null,
      cls: null,
      number: null
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleChangeCls = this.handleChangeCls.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLoginClick(event) {
    event.preventDefault();
    document.getElementById('register').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('form-wrapper').classList.remove('hidden');
  }

  onCancelClick(event) {
    document.getElementById('register').classList.add('hidden');
    document.getElementById('form-wrapper').classList.add('hidden');
  }

  onSubmit(event) {
    event.preventDefault();
    axios.post('https://class-room-calendar.herokuapp.com/users', {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
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

  handleChangeName(e) {
    this.setState({
      name: e.target.value,
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

  render() {
    return (
      <div id={'register'} className={this.props.className}>
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
            <Input type={'text'} className={'form-control'} placeholder={'Name'}
                   onChange={this.handleChangeName}/>
          </FormGroup>
          <FormGroup tag={'div'}>
            <Input type={'text'} className={'form-control'} placeholder={'Grade'}
                   onChange={this.handleChangeGrade}/>
          </FormGroup>
          <FormGroup tag={'div'}>
            <Input type={'text'} className={'form-control'} placeholder={'Class'}
                   onChange={this.handleChangeCls}/>
          </FormGroup>
          <FormGroup tag={'div'}>
            <Input type={'text'} className={'form-control'} placeholder={'Number'}
                   onChange={this.handleChangeNumber}/>
          </FormGroup>
          <i onClick={this.onCancelClick} className={'register-close far fa-times-circle fa-3x'}/>
          <Button type={'submit'} color={'primary'} className={'w-100 form-control'}>Register</Button>
          <a href={'#'} id={'SignUp'} onClick={this.onLoginClick}>로그인</a>
        </Form>
      </div>
    )
  }

}

export default Register;

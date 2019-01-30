import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import styled from "styled-components";
import Loading from "./Loading";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Modal = styled.div`
  padding: 30px;
  width: 540px;
  border-radius: 30px;
  background: #FFF;
`;

const ModalHeader = styled.div`
  display: flex;
`;

const ModalTitle = styled.p`
  font-weight: bold;
  font-size: 2em;
`;

const Close = styled.i`
  font-size: 2em;
  color: #AAA;
  flex: 0 1 auto;
  margin-left: auto;
  cursor: pointer;
  
  &:hover {
    color: #000;
  }
`;

const ModalBody = styled.div`
  margin-top: 20px;
`;

const Content = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 200px;
  overflow: auto;
  font-weight: bold;
  word-break: break-word;
`;

const Delete = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #ff7861;
  font-weight: bold;
  font-size: 1.3em;
  color: #FFFFFF;

  &:hover {
    background-color: #ff5046;
  }
`;

class PlanInfoModal extends Component {
  state = {
    show: false,
    loading: false,
    plan: {}
  };

  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.event.on('show-plan', this.show);
  }

  componentWillUnmount() {
    this.event.removeListener('show-plan', this.show);
  }

  show(plan) {
    this.setState({show: true, plan: plan});
  }

  close() {
    this.setState({show: false});
  }

  deletePlan(id) {
    const jwt = cookie.load('JWT');

    if (jwt) {
      this.setState({loading: true});
      axios.delete(`https://planther-api.herokuapp.com/plans/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }).then(res => {
        this.setState({loading: false});
        alert("삭제되었습니다.");
        window.location.reload();
      }).catch(err => {
        this.setState({loading: false});
        alert("오류가 발생했습니다.");
      })
    } else {
      alert("로그인을 먼저 해주세요.");
    }
  }

  render() {
    return (this.state.show ?
      <Wrapper className={'plan-wrapper'} onClick={({target}) => {if (target.classList.contains('plan-wrapper')) this.close()}}>
        {this.state.loading ? <Loading/> : null}
        <Modal>
          <ModalHeader>
            <ModalTitle>{this.state.plan.title}</ModalTitle>
            <Close className={'fas fa-times'} onClick={this.close}/>
          </ModalHeader>
          <ModalBody>
            <p>작성자: {this.state.plan.user.username}</p>
            <Content>
              {this.state.plan.content.split('\n').map((line, i) => <p key={'line'+i}>{line}</p>)}
            </Content>
            <Delete onClick={() => this.deletePlan(this.state.plan.id)}>삭제</Delete>
          </ModalBody>
        </Modal>
      </Wrapper> : null);
  }
}

export default PlanInfoModal;
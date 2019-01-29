import React, {Component} from 'react';
import {connect} from 'react-redux';
import cookie from 'react-cookies';
import axios from 'axios';

import styled from 'styled-components';

const background = {
  presentation: '#f3c74d',
  event: '#f5b74d',
  assignment: '#ffd57d'
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  
  &:hover {
    background: #eee;
  }
`;

const Header = styled.div`
  display: flex;
  padding: 5% 5% 0 5%;
`;

const Add = styled.i`
  margin-left: auto;
  color: #999;
  
  &:hover {
    color: #555;
  }
`;

const Body = styled.div`
  height: calc(1280px / 8);
  overflow: auto;
  
  @media screen and (max-width: 1280px) {
    height: 13vw;
  }
`;

const Plan = styled.div`
  text-align: center;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  color: #FFFFFF;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  overflow:hidden;
  background: ${props => props.background};
  
  &:hover {
    background: #ff7640;
  }
`;

class Day extends Component {
  state = {
    hover: false,
    plans: []
  };

  componentDidMount() {
    const jwt = cookie.load('JWT');

    if (jwt) {
      const {year, month, day} = this.props.date;
      axios.get(`https://planther-api.herokuapp.com/plans/${year}/${month}/${day}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }).then(res => {
        this.setState({plans: res.data});
      }).catch(err => {
        alert("오류가 발생했습니다.");
        window.location.reload();
      });
    }
  }

  render() {
    return (
      <Wrapper onMouseOver={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}
               style={{background: this.state.plans.length > 0 ? '#eee' : null}}>
        <Header>
          <span>{this.props.date.day}</span>
          {this.state.hover ? <Add className={'hidden fas fa-plus'} onClick={() => {
            if (this.props.isLogin) {
              this.event.emit('show-addplan', this.props.date)
            } else {
              alert("먼저 로그인해주세요.");
            }
          }}/> : null}
        </Header>
        <Body>
          {this.state.plans.map((plan, i) => (
            <Plan background={background[plan.type]} key={'plan' + i}><span>{plan.title}</span></Plan>))}
        </Body>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  const {isLogin} = state.auth;
  return {
    isLogin
  }
}

export default connect(mapStateToProps)(Day)
;
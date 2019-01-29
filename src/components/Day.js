import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

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

class Day extends Component {
  state = {
    hover: false,
  };

  render() {
    return (
      <Wrapper onMouseOver={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}>
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

export default connect(mapStateToProps)(Day);
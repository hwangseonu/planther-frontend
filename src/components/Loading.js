import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  z-index: 1;
`;

class Loading extends Component {
  render() {
    return (
      <Wrapper>
        <ReactLoading type={'bubbles'} color={'#ffdf9b'} height={'200px'} width={'200px'}/>
      </Wrapper>
    )
  }
}

export default Loading;
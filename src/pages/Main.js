import React, {Component} from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';

import background from '../assets/images/background.png';

const MainWrapper = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
  width: 100%;
  height: 70vh;
  background: rgba(0, 0, 0, 0.5);
`;

const TitleWrapper = styled.div`
  margin-left: 12.6vw;
  color: #FFF;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 4em;
`;

const Description = styled.p`
  font-weight: lighter;
`;

const Button = styled.button`
  margin-top: 1em;
  width: 200px;
  height: 50px;
  background-color: #f2c61d;
  border: none;
  border-radius: 30px;
  font-size: 1.3em;
  color: #FFF;
`;

class Main extends Component {
  render() {
    return (
      <MainWrapper id={'main'}>
        <Navbar/>
        <Header className={'header'}>
          <TitleWrapper className={'title-wrapper'}>
            <Title className={'title'}>Planther</Title>
            <Description className={'description'}>소중한 우리들의 일정을 위한 서비스</Description>
            <Button>Go to calendar</Button>
          </TitleWrapper>
        </Header>
        <div style={{height: '70vh', background: '#FFF'}}></div>
      </MainWrapper>
    )
  }
}

export default Main;
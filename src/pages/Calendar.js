import React, {Component} from 'react';
import Navbar from '../components/Navbar';

import styled from 'styled-components';
import utils from '../utils';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 140px;
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const Year = styled.p`
  font-size: 1em;
  color: #777;
`;

const Month = styled.p`
  font-size: 3.5em;
  font-weight: bold;
`;

const CalendarTable = styled.table`
  table-layout: fixed;
  width: 1280px;
  margin-top: 70px;
  
  & th:nth-child(1) {
    color: red;
  }
  
  & th:nth-child(7) {
    color: blue;
  }
  
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

const DayOfWeek = styled.th`
  background-color: #ffdf9b;
  border-radius: 10px;
`;

const Item = styled.th`
  height: calc(1280px / 7);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  text-align: left;
  vertical-align: top;
  
  @media screen and (max-width: 1280px) {
    height: 14vw;
  }
`;

class Calendar extends Component {
  render() {
    const year = 2019;
    const month = 1;

    let items = [];
    [...Array(utils.getDayOfWeek(year, month, 1)).keys()].map(i => items.push(<Item key={`blank${i}`}/>));
    [...Array(utils.getDays(year, month)).keys()].map(i => items.push(<Item key={`day${i}`}>{i + 1}</Item>));

    return (
      <div>
        <Navbar/>
        <Wrapper>
          <div>
            <TitleWrapper>
              <Year>2019</Year>
              <Month>1</Month>
            </TitleWrapper>
            <CalendarTable>
              <thead>
                <tr>
                  <DayOfWeek>일</DayOfWeek>
                  <DayOfWeek>월</DayOfWeek>
                  <DayOfWeek>화</DayOfWeek>
                  <DayOfWeek>수</DayOfWeek>
                  <DayOfWeek>목</DayOfWeek>
                  <DayOfWeek>금</DayOfWeek>
                  <DayOfWeek>토</DayOfWeek>
                </tr>
              </thead>
              <tbody>
                <tr>{items.slice(0, 7)}</tr>
                <tr>{items.slice(7, 14)}</tr>
                <tr>{items.slice(14, 21)}</tr>
                <tr>{items.slice(21, 28)}</tr>
                <tr>{items.slice(28, 35)}</tr>
                <tr>{items.slice(35, 42)}</tr>
              </tbody>
            </CalendarTable>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default Calendar;
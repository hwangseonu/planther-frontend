import React, {Component} from 'react';

import './Index.css';
import Header from "../../component/Header/Header";
import Login from "../../component/Login/Login";
import Register from "../../component/Register/Register";

import moment from 'moment';

class Index extends Component {

  onClickMain() {
    const now = moment();
    const year = parseInt(now.format('YYYY'));
    const month = parseInt(now.format('MM'));
    window.location.href = `/calendar/${year}/${month}`;
  }

  render() {
    return (
      <div id={'index'}>
        <Header/>
        <Login className={'hidden'}/>
        <Register className={'hidden'}/>
        <section className={'page-section'}>
          <h1 className={'page-title'}>Planther</h1>
          <p className={'page-subtitle'}>"함께 채워가는 학급 플래너 Plan together"</p>
          <button onClick={this.onClickMain} className={'btn-main'}>Go to planner >></button>
        </section>
        <section className={'page-description'}>

        </section>
      </div>
    )
  }

}

export default Index;

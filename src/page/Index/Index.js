import React, {Component} from 'react';

import './Index.css';
import Header from "../../component/Header/Header";
import Login from "../../component/Login/Login";
import Register from "../../component/Register/Register";

class Index extends Component {

  render() {
    return (
      <div className={'index'}>
        <Header/>
        <Login className={'hidden'}/>
        <Register className={'hidden'}/>
        <section className={'page-section'}>
          <h1 className={'page-title'}>Hello!</h1>
          <p className={'page-subtitle'}>"함께 채워가는 학급 플래너 Plan together"</p>
          <button className={'btn-main'}>Go to planner >></button>
        </section>
        <section className={'page-description'}>

        </section>
      </div>
    )
  }

}

export default Index;

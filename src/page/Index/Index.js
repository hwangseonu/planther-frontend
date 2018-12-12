import React, {Component} from 'react';

import './Index.css';
import Header from "../../component/Header/Header";

class Index extends Component {

  render() {
    return (
      <div className={'index'}>
        <Header/>
        <section className={'page-section'}>
          <h1 className={'page-title'}>Hello!</h1>
          <p className={'page-subtitle'}>"함께 채워가는 학급 플래너 Plan together"</p>
          <button className={'btn'}>Go to planner >></button>
        </section>
        <section className={'page-description'}>

        </section>
      </div>
    )
  }

}

export default Index;

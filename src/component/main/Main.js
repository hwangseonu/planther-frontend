import React, {Component} from 'react';
import {Container} from 'reactstrap';

import './Main.css';

class Main extends Component {

  render() {
    return (
      <section id={'main-section'}>
        <div className={'gray main'}>
          <Container>
            <h1 className={'title'}>Planther</h1>
            <p className={'description'}>"함께 채워가는 계획. Plan together"</p>
            <a href={'#'} className={'btn btn-primary btn-lg'}>
              Go to calendar >>
            </a>
          </Container>
        </div>
        <div className={'white'}>

        </div>
      </section>
    )
  }

}

export default Main;

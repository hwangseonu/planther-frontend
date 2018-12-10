import React, {Component} from 'react';
import {Jumbotron, Container, Button} from 'reactstrap';

import './Main.css';

class Main extends Component {

  render() {
    return (
      <div id={'main'}>
        <Jumbotron>
          <Container>
            <h1 className={'title'}>Planther</h1>
            <p>"함께 채워가는 계획. Plan together"</p>
            <Button color={'primary'} className={'btn-lg'}>
              Go to calendar >>
            </Button>
          </Container>
        </Jumbotron>
      </div>
    )
  }

}

export default Main;

import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Modal = styled.div`
  padding: 30px;
  width: 540px;
  border-radius: 30px;
  background: #FFF;
`;

const ModalHeader = styled.div`
  display: flex;
`;

const ModalTitle = styled.p`
  font-weight: bold;
  font-size: 2em;
`;

const Close = styled.i`
  font-size: 2em;
  color: #AAA;
  flex: 0 1 auto;
  margin-left: auto;
  cursor: pointer;
  
  &:hover {
    color: #000;
  }
`;

const ModalBody = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  font-weight: bold;
  font-size: 1.3em;
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  font-weight: bold;
  font-size: 1.3em;
  border: none;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
  resize: none;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  background: #f2c61d;
  font-weight: bold;
  font-size: 1.3em;
  color: #FFF;
  
  &:hover {
    background: #ffd52a;
  }
`;

class AddPlanModal extends Component {
  state = {
    show: false,
    date: {}
  };

  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.event.on('show-addplan', this.show);
  }

  componentWillUnmount() {
    this.event.removeListener('show-addplan', this.show);
  }

  show(date) {
    this.setState({show: true, date: date});
  }

  close() {
    this.setState({show: false});
  }

  render() {
    return (this.state.show ?
      <Wrapper>
        <Modal>
          <ModalHeader>
            <ModalTitle>일정추가</ModalTitle>
            <Close className={'fas fa-times'} onClick={this.close.bind(this)}/>
          </ModalHeader>
          <ModalBody>
            <Input placeholder={'Title'}/>
            <TextArea placeholder={'Content'}/>
            <Button>추가</Button>
          </ModalBody>
        </Modal>
      </Wrapper> : null
    );
  }
}

export default AddPlanModal;
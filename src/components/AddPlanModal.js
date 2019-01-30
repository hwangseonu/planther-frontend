import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import styled from 'styled-components';

import Loading from './Loading';

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

const Select = styled.select`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 1.3em;
  font-weight: bold;
  color: #999;
  background: #eee;
  margin-bottom: 20px;
`;

class AddPlanModal extends Component {
  state = {
    show: false,
    loading: false,
    date: {year: 0, month: 0, day:0},
    title: '',
    content: '',
    type: ''
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

  handleSubmit() {
    const jwt = cookie.load('JWT');

    if (jwt) {
      const {title, content, type} = this.state;
      const {year, month, day} = this.state.date;

      if (title && content && type) {
        this.setState({loading: true});
        axios.post(`https://planther-api.herokuapp.com/plans`, {
          title,
          content,
          type,
          year,
          month,
          day
        }, {headers: {Authorization: `Bearer ${jwt}`}}).then(res => {
          this.setState({loading: false});
          alert("추가되었습니다.");
          window.location.reload();
        }).catch(err => {
          this.setState({loading: false});
          alert("오류가 발생했습니다.")
          window.location.reload();
        })
      } else {
        alert("빈칸이 있습니다.");
      }
    } else {
      alert("먼저 로그인해주세요.");
      window.location.reload();
    }
  }

  render() {
    return (this.state.show ?
        <Wrapper>
          {this.state.loading ? <Loading/> : null}
          <Modal>
            <ModalHeader>
              <ModalTitle>일정추가</ModalTitle>
              <Close className={'fas fa-times'} onClick={this.close.bind(this)}/>
            </ModalHeader>
            <ModalBody>
              <Input placeholder={'Title'} onChange={({target}) => this.setState({title: target.value})}/>
              <TextArea placeholder={'Content'} onChange={({target}) => this.setState({content: target.value})}/>
              <Select defaultValue={''} onChange={({target}) => this.setState({type: target.value})} onKeyPress={({key}) => {if (key === 'Enter') this.handleSubmit()}}>
                <option value={''} disabled={true} hidden={true}>일정 종류</option>
                <option value={'assignment'}>과제</option>
                <option value={'presentation'}>발표</option>
                <option value={'event'}>행사</option>
              </Select>
              <Button onClick={this.handleSubmit.bind(this)}>추가</Button>
            </ModalBody>
          </Modal>
        </Wrapper> : null
    );
  }
}

export default AddPlanModal;
import React, {Component} from 'react';
import ReactLoading from 'react-loading';

const style = {
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#FFFFFF',
  zIndex: 1
};

class Loading extends Component {

  render() {
    return (
      <div style={style} id={'loading'} className={'loading-wrapper ' + (this.props.visible ? '' : 'hidden')}>
        <ReactLoading type={'bubbles'} color={'#F2C61D'} height={'10px'} width={'100px'}/>
      </div>
    )
  }

}

export default Loading;

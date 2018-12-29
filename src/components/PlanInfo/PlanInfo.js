import React, {Component} from 'react';

import './PlanInfo.css';

class PlanInfo extends Component {

  onCloseClick() {
    document.getElementById('info-wrapper').classList.add('hidden');
  }

  onOutClick(event) {
    if (event.target.id === 'info-wrapper') {
      document.getElementById('info-wrapper').classList.add('hidden');
    }
  }

  render() {
    const {title, content, user} = this.props.data;

    return (
      <div id={'info-wrapper'} className={'hidden'} onClick={this.onOutClick}>
        <div className={'info'}>
          <div className={'info-header'}>
            <div className={'info-title'}>
              <span>{title}</span>
            </div>
            <i onClick={this.onCloseClick} className={'info-close far fa-times-circle'}/>
          </div>
          <div className={'info-body'}>
            <span className={'info-writer'}>등록자: {user.name}</span>
            <div className={'info-content'}>{content}</div>
            <button className={'info-delete'}>삭제</button>
          </div>
        </div>
      </div>
    )
  }
}

export default PlanInfo;

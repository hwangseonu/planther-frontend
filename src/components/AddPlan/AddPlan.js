import React, {Component} from 'react';
import Loading from "react-loading/lib/react-loading";

class AddPlan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoad: false
    };
  }


  render() {
    return (
      <div className={'addplan-wrapper'}>
        <Loading visible={this.state.isLoad}/>
        <div className={'addplan'}>
          <div className={'addplan-header'}>
            <span className={'addplan-title'}>일정 추가</span>
          </div>
          <div className={'addplan-body'}>
            <form id={'addplan-form'}>
              <input/>
              <textarea />
              <select defaultValue={''}>
                <option className={''} disabled={true} hidden={true}>일정 종류</option>
                <option value={'assignment'}>과제</option>
                <option value={'presentation'}>발표</option>
                <option value={'event'}>행사</option>
              </select>
              <button type={'submit'} className={'addplan-submit'}>추가하기</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default AddPlan;

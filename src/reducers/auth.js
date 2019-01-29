import * as types from '../actions/ActionTypes';

const initialState = {
  isLogin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOGIN_STATUS:
      return {
        ...state,
        isLogin: action.status
      };
    default:
      return state;
  }
}
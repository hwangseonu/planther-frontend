import * as types from '../actions/ActionTypes';

const initialState = {
  isLogin: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLogin: false
      };
    default:
      return state;
  }
}
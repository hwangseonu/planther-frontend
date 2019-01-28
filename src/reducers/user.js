import * as types from '../actions/ActionTypes';

const initialState = {
  user: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER_DATA:
      return {
        ...state,
        user: action.data
      };
    default:
      return state;
  }
}
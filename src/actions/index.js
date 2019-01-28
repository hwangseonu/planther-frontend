import * as types from './ActionTypes';
import axios from 'axios';

const login = (username, password) => {
  const success = (data) => ({type: types.LOGIN_SUCCESS, data});
  const failure = (error) => ({type: types.LOGIN_FAILURE, error});

  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.post('https://planther-api.herokuapp.com/auth', {username, password}).then(res => {
        dispatch(success(res.data));
        resolve(res);
      }).catch(err => {
        dispatch(failure(err));
        reject(err);
      });
    });
  };
};

export const authActions = {
  login
};
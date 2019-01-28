import cookie from 'react-cookies';
import axios from 'axios';
import auth from './auth';
import * as types from './ActionTypes';

const getUserData = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const jwt = cookie.load('JWT');

      axios.get(`https://planther-api.herokuapp.com/users`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }).then(res => {
        dispatch({
          type: types.SET_USER_DATA,
          data: res.data
        });
        resolve(res);
      }).catch(err => {
        dispatch(auth.logout());
        dispatch({
          type: types.SET_USER_DATA,
          data: null
        });
        reject(err);
      })
    });
  };
};

export default {
  getUserData
};
import cookie from 'react-cookies';
import axios from 'axios';
import auth from './auth';
import * as types from './ActionTypes';

const getUserData = (isLogin) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      if (!isLogin) {
        reject('you was not login');
        dispatch(auth.logout());
      }

      const jwt = cookie.load('JWT');
      if (!jwt) reject('Token is not exists');

      axios.get(`https://planther-api.herokuapp.com/users`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }).then(res => {
        resolve(res);
        dispatch({
          type: types.SET_USER_DATA,
          data: res.data
        });
      }).catch(err => {
        reject(err);
        dispatch(auth.logout());
        dispatch({
          type: types.SET_USER_DATA,
          data: null
        });
      })
    });
  };
};

export default {
  getUserData
};
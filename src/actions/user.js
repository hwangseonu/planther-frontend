import axios from 'axios';
import cookie from 'react-cookies';
import * as types from './ActionTypes';

const getUserData = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const jwt = cookie.load('JWT');

      if (jwt) {
        axios.get('https://planther-api.herokuapp.com/users', {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }).then(res => {
          dispatch({
            type: types.SET_USER_DATA,
            data: res.data
          });
          dispatch({
            type: types.SET_LOGIN_STATUS,
            status: true
          });
          resolve(res);
        }).catch(err => {
          // if (err.response.status === 409) {
          //TODO refresh token
          // }
          reject(err);
        })
      } else {
        dispatch({type: types.SET_LOGIN_STATUS, status: false});
        reject("Token is not exists");
      }
    })
  }
};

export default {
  getUserData
}
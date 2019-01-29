import axios from 'axios';
import cookie from 'react-cookies';
import * as types from './ActionTypes';

const login = (username, password) => {
  return () => {
    return new Promise((resolve, reject) => {
      axios.post(`https://planther-api.herokuapp.com/auth`, {username, password}).then(res => {
        cookie.save('JWT', res.data.access, {path: '/'});
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
};

const register = (username, password, name, grade, cls, number) => {
  return () => {
    return new Promise((resolve, reject) => {
      axios.post(`https://planther-api.herokuapp.com/users`, {
        username,
        password,
        name,
        grade,
        cls,
        number
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    });
  }
};

const logout = () => {
  return dispatch => {
    return new Promise((resolve) => {
      cookie.remove('JWT');
      dispatch({
        type: types.SET_LOGIN_STATUS,
        status: false
      });
      resolve();
    });
  }
};

export default {
  login,
  register,
  logout
}
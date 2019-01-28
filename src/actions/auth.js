import axios from 'axios';
import cookie from 'react-cookies';
import * as types from './ActionTypes';

const login = (username, password) => {
  const success = (data) => ({type: types.LOGIN_SUCCESS, data});
  const failure = (error) => ({type: types.LOGIN_FAILURE, error});

  return async (dispatch) => {
    try {
      const res = await axios.post(`https://planther-api.herokuapp.com/auth`, {username, password});
      cookie.save('JWT', res.data.access, {path: '/'});
      await dispatch(success(res.data));
      return res;
    } catch (err) {
      dispatch(failure(err));
      throw err;
    }
  }

};

const register = (username, password, name, grade, cls, number) => {
  const success = (data) => ({type: types.REGISTER_SUCCESS, data});
  const failure = (error) => ({type: types.REGISTER_FAILURE, error});

  return async (dispatch) => {
    try {
      const res = await axios.post('https://planther-api.herokuapp.com/users', {
        username,
        password,
        name,
        grade,
        cls,
        number
      });
      await dispatch(success(res.data));
      return res;
    } catch (err) {
      await dispatch(failure(err));
      throw err
    }
  }
};

const logout = () => {
  return dispatch => {
    cookie.remove('JWT');
    dispatch({type: types.LOGOUT});
  };
};

export default {
  login,
  register,
  logout
};
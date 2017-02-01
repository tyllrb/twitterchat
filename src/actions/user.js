import * as twitter from '../api/twitter';
import * as types from '../constants/constants';

/*
export function login() {
  return function (dispatch) {
    return twitter.login().then(results => {
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function loginSuccess() {
  return {
    type: 'derp',
    payload: true
  };
}

export function loadPage() {
  return {
    type: types.LOAD_PAGE,
    payload: null
  };
}
*/

function requestTokenFailed(error) {
  return {
    type: types.LOGIN_REQUEST_TOKEN_FAILED,
    payaload: error
  };
}


export function storeRequestToken(token) {
  return {
    type: types.LOGIN_REQUEST_TOKEN,
    payload: token
  }
}

export function generateRequest() {
  return function (dispatch) {
    return twitter.requestToken().then((token) => {
      return dispatch(storeRequestToken(token));
    }, (error) => {
      return dispatch(requestTokenFailed(error));
    })
  };
}

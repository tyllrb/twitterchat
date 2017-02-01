import * as types from '../constants/constants';
import initialState from './initialState';
import Store from '../store/store';

export default function loginReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST_TOKEN:
      Store.write('requestToken', action.payload);
      return Store;
    case types.LOGIN_REQUEST_TOKEN_FAILED:
      Store.write(['requestToken', 'errors'], null);
      return state;
    default:
      return state;
  }
}
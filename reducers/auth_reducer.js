import { ActionTypes } from '../services/api';

const initialState = {
  authenticated: false,
  token: '',
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      console.log('auth success');
      return {
        ...state, authenticated: true, token: action.payload.token, user: action.payload.user,
      };
    case ActionTypes.DEAUTH_USER:
      return {
        ...state, authenticated: false, token: '', user: null,
      };
    case ActionTypes.AUTH_ERROR:
      console.log('auth error');
      return {
        ...state, authenticated: false, token: '', user: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;

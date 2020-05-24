import { ActionTypes } from '../services/api';

const initialState = {
  authenticated: false,
  email: '',
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true, email: action.payload };
    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false, email: '' };
    case ActionTypes.AUTH_ERROR:
      return { ...state, authenticated: false, email: '' };
    default:
      return state;
  }
};

export default AuthReducer;

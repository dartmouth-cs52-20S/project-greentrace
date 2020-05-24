import axios from 'axios';
import { AsyncStorage } from 'react-native';

const API_URL = 'https://greentrace-server.herokuapp.com/api/events';
const API = 'https://greentrace-server.herokuapp.com/api';

export const ActionTypes = {
  TEST: 'TEST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  FETCH_MESSAGES: 'FETCH_MESSAGES',
};

export const getLocations = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.get(API_URL)
        .then((response) => {
          // console.log('getlocations -> response');
          // console.log(response.data.message);
          resolve(response.data.message);
          dispatch({ type: ActionTypes.TEST, payload: response.data.message });
        })
        .catch((error) => {
          console.log(`backend api error: ${error}`);
          reject(error);
        });
    });
  };
};

export const sendLocation = ({ latitude, longitude }) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.post(API_URL, { longitude: Number(longitude), latitude: Number(latitude) })
        .then((response) => {
          console.log('sendlocation -> response');
          console.log(response.data);
          console.log(response.data.message);
          resolve(response.data.message);
          dispatch({ type: ActionTypes.TEST, payload: response.data.message });
        })
        .catch((error) => {
          console.log(`backend api error: ${error}`);
          reject(error);
        });
    });
  };
};

export const signup = ({ email, password }) => {
  return (dispatch) => {
    axios.post(`${API}/signup`, { email, password }).then((response) => {
      console.log(response);
      AsyncStorage.setItem('currUser', response.data.id);
      dispatch({ type: ActionTypes.AUTH_USER, payload: email });
    }).catch((error) => {
      dispatch({ type: ActionTypes.AUTH_ERROR });
    });
  };
};

export const signin = ({ email, password }) => {
  return (dispatch) => {
    axios.post(`${API}/signin`, { email, password }).then((response) => {
      AsyncStorage.setItem('currUser', response.data.id);
      dispatch({ type: ActionTypes.AUTH_USER, payload: email });
    }).catch((error) => {
      dispatch({ type: ActionTypes.AUTH_ERROR });
    });
  };
};

export const fetchMessages = () => {
  return (dispatch) => {
    axios.get(`${API}/user/${AsyncStorage.getItem('currUser')}/messages`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_MESSAGES, payload: response.data.message });
    });
  };
};

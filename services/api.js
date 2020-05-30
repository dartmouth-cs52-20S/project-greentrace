import axios from 'axios';
import { AsyncStorage } from 'react-native';

const API_URL = 'https://greentrace-server.herokuapp.com/api';

export const ActionTypes = {
  TEST: 'TEST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  FETCH_MESSAGES: 'FETCH_MESSAGES',
  UPDATE_USER: 'UPDATE_USER',
};

export const getLocations = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/location`)
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
      axios.post(`${API_URL}/location`, { longitude: Number(longitude), latitude: Number(latitude) })
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
    axios.post(`${API_URL}/signup`, { email, password }).then((response) => {
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
    axios.post(`${API_URL}/signin`, { email, password }).then((response) => {
      AsyncStorage.setItem('currUser', response.data.id);
      dispatch({ type: ActionTypes.AUTH_USER, payload: email });
    }).catch((error) => {
      dispatch({ type: ActionTypes.AUTH_ERROR });
    });
  };
};

export const fetchMessages = () => {
  console.log('fetchMessages');
  return (dispatch) => {
    // axios.get(`${API_URL}/user/${AsyncStorage.getItem('currUser')}/messages`).then((response) => {
    //   dispatch({ type: ActionTypes.FETCH_MESSAGES, payload: response.data.message });
    // });
    console.log('in return dispatch');
    // const user = '5ecb16e40801600038902185';
    const user = '5ed0202dc1ce1b00386f034f';
    axios.get(`${API_URL}/user/${user}/messages`).then((response) => {
      console.log('in fetchmessages axios get call');
      console.log(response);
      dispatch({ type: ActionTypes.FETCH_MESSAGES, payload: response.data.message });
    });
  };
};

export const sendMessage = (message) => {
  console.log('in send message');
  // const user = '5ecb16e40801600038902185';
  const user = '5ed0202dc1ce1b00386f034f';
  return (dispatch) => {
    axios.post(`${API_URL}/user/${user}/messages`, message).then((response) => {
      dispatch({ type: ActionTypes.SEND_MESSAGE, payload: response.data });
    });
    // axios.post(`${API_URL}/user/${AsyncStorage.getItem('currUser')}/messages`, message).then((response) => {
    //   dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
    // });
    // userId: '5ecb18190801600038902186',
  };
};

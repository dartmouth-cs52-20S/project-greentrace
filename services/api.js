/* eslint-disable object-curly-newline */
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { SENDGRID_API_KEY } from 'react-native-dotenv';

const API_URL = 'https://greentrace-server.herokuapp.com/api';
// const API_URL = 'http://localhost:9090/api';

export const ActionTypes = {
  STORE_LOCATION: 'STORE_LOCATION',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  FETCH_MESSAGES: 'FETCH_MESSAGES',
  UPDATE_USER: 'UPDATE_USER',
  GET_USER: 'GET_USER',
};

export const getLocations = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/location`)
        .then((response) => {
          // console.log('getlocations -> response');
          // console.log(response.data.message);
          resolve(response.data.message);
          dispatch({ type: ActionTypes.STORE_LOCATION, payload: response.data.message });
        })
        .catch((error) => {
          console.log(`backend api error: ${error}`);
          reject(error);
        });
    });
  };
};

export function sendLocation({ sourceUserID, latitude, longitude, dataCollectionTimestamp }) {
  console.log('snedlocation', { sourceUserID, latitude, longitude, dataCollectionTimestamp });
  axios.post(`${API_URL}/location`, { sourceUserID, longitude: Number(longitude), latitude: Number(latitude), dataCollectionTimestamp })
    .then((response) => {
      console.log('sendlocation -> response');
      console.log(response.data);
    })
    .catch((error) => {
      console.log(`backend api error: ${error}`);
    });
}

export const signup = ({ email, password }) => {
  return (dispatch) => {
    console.log('test');
    axios.post(`${API_URL}/signup`, { email, password }).then((response) => {
      console.log('test');
      const { token } = response.data;
      // eslint-disable-next-line no-shadow
      const { email, id } = response.data.user;
      console.log('stuff returned from axios call', token, email, id);

      const msg = {
        personalizations: [{ to: [{ email }] }], from: { email: 'greentracedartmouth@gmail.com' }, subject: 'Your GreenTrace Token', content: [{ type: 'text/plain', value: `${token}` }],
      };
      axios.post('https://api.sendgrid.com/v3/mail/send', msg, { headers: { Authorization: `Bearer ${SENDGRID_API_KEY}` } }).then(() => {
        console.log('success');
      }).catch(() => {
        console.log('not success');
      });
      AsyncStorage.setItem('currUser', JSON.stringify(response.data.user));
      // AsyncStorage.setItem('currUser', response.data.id);
      dispatch({ type: ActionTypes.AUTH_USER, payload: response.data });
    }).catch((error) => {
      console.log(error);
      dispatch({ type: ActionTypes.AUTH_ERROR });
    });
  };
};

export const signin = ({ email, password }) => {
  return (dispatch) => {
    axios.post(`${API_URL}/signin`, { email, password }).then((response) => {
      // console.log('data', response.data);
      // console.log('user', response.data.user);
      AsyncStorage.setItem('currUser', JSON.stringify(response.data.user));
      AsyncStorage.getItem('currUser').then((result) => { console.log(result); }).catch((error) => { console.log(error); });

      dispatch({ type: ActionTypes.AUTH_USER, payload: response.data });
    }).catch((error) => {
      dispatch({ type: ActionTypes.AUTH_ERROR });
      console.log('entered error');
      console.log('line 89 error', error);
    });
  };
};

export const fetchMessages = () => {
  return (dispatch) => {
    console.log('fetchMessages');
    AsyncStorage.getItem('currUser')
      .then((user) => {
        if (user !== null) {
          const parsed = JSON.parse(user);
          // console.log('fetch messages user line 98', parsed.id);
          axios.get(`${API_URL}/user/${parsed.id}/messages`).then((response) => {
            // console.log('in return dispatch', response.data);
            // dispatch({ type: ActionTypes.FETCH_MESSAGES, payload: response.data.message });
            // console.log('in return dispatch message', response.data.messages);
          // console.log('in API, line 105', response.data);
          // console.log(tempArray);
            dispatch({ type: ActionTypes.FETCH_MESSAGES, payload: response.data });
          });
        }
      })
      .catch((err) => { console.log('fetch message error line 98', err); return null; });
  };
  // const user = '5ecb16e40801600038902185';
  // const user = '5ed0202dc1ce1b00386f034f';
  // const user = '5ed2a1f2a3c6ac0038eb7895';
  // axios.get(`${API_URL}/user/${user}/messages`).then((response) => {
  //   console.log('in fetchmessages axios get call');
  //   console.log(response);
  //   dispatch({ type: ActionTypes.FETCH_MESSAGES, payload: response.data.message });
  // });
};

export const sendMessage = (message) => {
  console.log('in send message', message);
  // const user = '5ecb16e40801600038902185';
  // const user = '5ed0202dc1ce1b00386f034f';
  // const user = '5ed2a1f2a3c6ac0038eb7895';
  return (dispatch) => {
    AsyncStorage.getItem('currUser')
      .then((currUser) => {
        const parsed = JSON.parse(currUser);
        const parsedId = parsed.id;
        axios.post(`${API_URL}/user/${parsedId}/messages`, message).then((response) => {
          dispatch({ type: ActionTypes.SEND_MESSAGE, payload: response.data });
        });
      })
      .catch((err) => {
        console.log('error sending message line 130', err);
      });
    // axios.post(`${API_URL}/user/${user}/messages`, message).then((response) => {
    //   dispatch({ type: ActionTypes.SEND_MESSAGE, payload: response.data });
    // });
    // axios.post(`${API_URL}/user/${AsyncStorage.getItem('currUser')}/messages`, message).then((response) => {
    //   dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
    // });
    // userId: '5ecb18190801600038902186',
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    axios.get(`${API_URL}/user/${id}`)
      .then((response) => {
        dispatch({ type: ActionTypes.GET_USER, payload: response.DATA });
      })
      .catch((error) => {
        console.log('ERROR ERROR! NO USER EXISTS AT THAT ID!');
      });
  };
};

export const getHeatpmap = () => {
  axios.get(`${API_URL}/heatmap`)
    .then((response) => {
      return response.message;
    })
    .catch((error) => {
      console.log(`backend api error: ${error}`);
    });
};

export const updateUser = (id, update) => {
  axios.put(`${API_URL}/user/${id}`, update)
    .then((response) => {
      AsyncStorage.setItem('currUser', JSON.stringify(response.data));
      return response;
    })
    .catch((error) => {
      console.log('Backend API error', error);
      return error;
    });
};

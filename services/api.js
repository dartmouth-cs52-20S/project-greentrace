import axios from 'axios';

const API_URL = 'https://greentrace-server.herokuapp.com/api/';

export const ActionTypes = {
  TEST: 'TEST',
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

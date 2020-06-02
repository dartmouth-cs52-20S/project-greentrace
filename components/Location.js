/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import * as Location from 'expo-location';
import {
  View, Button, Linking, Platform, AppState, AsyncStorage,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { sendLocation } from '../services/api';

const LOCATION_TASK_NAME = 'background-location-task';

class LocationTracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
      isLocationModalVisible: false,
      appState: AppState.currentState,
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount = () => {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.getLocationAsynch();
  }

  componentDidMount = async () => {
    // await AsyncStorage.setItem('currentUser', JSON.stringify(this.props.currentUser));
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.High,
    });
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  getLocationAsynch = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location denied',
        });
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    } catch (error) {
      const status = Location.getProviderStatusAsync();
      if (!(await status).locationServicesEnabled) {
        this.setState({ isLocationModalVisible: true });
      }
    }
  }

  static getCurrentUser = async () => {
    const currentUser = AsyncStorage.getItem('currUser');
    console.log('in get Curr user', currentUser);
    return currentUser;
  }

  handlePress = (event) => {
    event.preventDefault();
    this.setState({ isLocationModalVisible: false, openSettings: true });
  }

  handleModalHide = (event) => {
    event.preventDefault();
    if (this.state.openSettings) {
      this.openSettings();
    } else {
      this.setState({ openSettings: undefined });
    }
  }

  handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      this.getLocationAsynch();
    }
  }

  openSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      console.log('Initial testing on IOS only');
    }
    this.setState({ openSettings: false });
  }

  render() {
    let text = 'Waiting...';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
      console.log(text);
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    return (
      <Modal isVisible={this.state.isLocationModalVisible} onModalHide={this.openSettings}>
        <View style={{
          height: 300, width: 300, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <Button onPress={this.handlePress} />
        </View>
      </Modal>
    );
  }
}

TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  console.log('TaskManager running');
  if (error) {
    // Error occurred - check `error.message` for more details.
    console.log(error);
    return;
  }
  if (data) {
    const { locations } = data;
    const { latitude, longitude } = locations[0].coords;
    const dataCollectionTimestamp = locations[0].timestamp;
    // const region = { latitude, longitude, latitudeDelta: 0.005, longitudeDelta: 0.005 };
    // AsyncStorage.setItem('currlocation', JSON.stringify(region));
    console.log('test');
    AsyncStorage.getItem('currUser')
      .then((result) => {
        console.log(result);
        if (result !== null) {
          const parsed = JSON.parse(result);
          const locationObject = { sourceUserID: parsed.id, longitude, latitude, dataCollectionTimestamp };
          sendLocation(locationObject);
          console.log(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // const currentUser = await LocationTracking.getCurrentUser();
  }
});

// const mapStateToProps = (reduxState) => ({
//   currentUser: reduxState.auth.user,
// });

export default connect(null, { sendLocation })(LocationTracking);
